import { Request, Response } from "express";
import { IService } from "../core/service.interface";
import { SpotDTO } from "../dto/spot.dto";

export class SpotHandler {

    private spotService: IService<SpotDTO>

    constructor(service: IService<SpotDTO>) {
        this.spotService = service
    }

    getSpots = async (req: Request, res: Response) => {
        try {
            const result = await this.spotService.findAll();
            res.status(200).json(result)
            console.log(result)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    getSpotById = async (req: Request, res: Response) => {
        let requestedId: string = req.params.id
        try {
            const result = await this.spotService.findById(requestedId);
            if (result === null) return res.status(404).json({ message: "Requested spot_id does not exist." })
            res.status(200).json(result)
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: 'ERROR 500 TA MERE', err });
        }
    }

    createSpot = async (req: Request, res: Response) => {
        const { addresseSpot } = req.body
        try {
            const result = await this.spotService.create({ addresseSpot })
            return res.status(200).json(result)
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

    updateSpot = async (req: Request, res: Response) => {
        const spotID = req.params.id
        const { addresseSpot } = req.body
        try {
            const result : any = await this.spotService.update({ addresseSpot }, spotID)
            if (!result.modifiedCount) return res.status(500).json({ message: 'Could not update spot' })
            return res.status(200).json({ message: 'Spot successfully updated.' })
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }

    deleteSpot = async (req: Request, res: Response) => {
        const id = req.params.id

        try {
            const result = await this.spotService.delete(id)
            if (result) return res.status(200).json({ message: 'Spot successfully deleted.' })
            return res.status(404).send()
        } catch (err) {
            return res.status(500).json({ message: 'Error in handler', err })
        }
    }
}