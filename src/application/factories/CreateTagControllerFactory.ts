import { SequelizeTagRepository } from "../../domain/repositories/SequelizeTagRepository";
import { CreateTagService } from "../../domain/services/CreateTagService";
import { CreateTagController } from "../../infrastructure/controller/CreateTagController";


export class CreateTagControllerFactory {
  static make() {
    const repository = new SequelizeTagRepository();
    const service = new CreateTagService(repository);
    const controller = new CreateTagController(service);

    return controller;
  }
}