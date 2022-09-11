import { ValidationError } from "../../domain/errors/ValidationError";
import { CreateTagService } from "../../domain/services/CreateTagService";
import { IController, IRequest, IResponse } from "../adapters/controller.interface";

export class CreateTagController implements IController {
  constructor(
    private service: CreateTagService
  ) { }

  async handle(req: IRequest): Promise<IResponse> {
    const { name, type } = req.payload;

    if (!name || typeof name !== 'string') {
      return {
        status: 200,
        payload: {
          error: 'INVALID_NAME'
        }
      }
    }

    if (!type || typeof type !== 'string') {
      return {
        status: 400,
        payload: {
          error: 'INVALID_TAG_TYPE'
        }
      }
    }

    try {
      const { id } = await this.service.create(name, type);

      return {
        status: 201,
        payload: {
          error: id
        }
      }
    } catch (err) {
      if (err instanceof ValidationError) {
        return {
          status: 400,
          payload: {
            error: err.message
          }
        }
      }

      return {
        status: 500,
        payload: {
          error: ""
        }
      }
    }
  }
}