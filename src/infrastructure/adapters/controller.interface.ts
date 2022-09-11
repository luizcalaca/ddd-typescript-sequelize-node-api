export type IRequest = {
    payload: any
    params: any
    query: any
}

export type IResponse = {
    status: number
    payload: any
}

export interface IController {
    handle(req: IRequest): Promise<IResponse>
}