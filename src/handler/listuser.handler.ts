import { Request, Response } from "express";
import { IApiService } from "../core/service.interface";

export class ListuserHandler {

    private listService: IApiService

    constructor(service: IApiService) {
        this.listService = service
    }

    getList = async (req: Request, res: Response) => {
        try {
            const result = await this.listService.listAll();
            res.status(200).json(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}