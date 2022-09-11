import { IController, IRequest, IResponse } from "../controller.interface";
import { Request, Response } from 'express'

export default class ExpressRoutesAdapter {

    static adapt(controller: IController) {
        return async (req: Request, res: Response) => {
            const request: IRequest = {
                payload: req.body,
                params: req.params,
                query: req.query
            }
            const response: IResponse = await controller.handle(request)
            return res.status(response.status).json(response.payload)
        }
    }
}