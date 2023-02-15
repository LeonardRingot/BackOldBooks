import { SpotDTO } from "../dto/spot.dto"; 
import { Spot } from "../models/spot.model"; 

export class SpotMapper {
    static mapToDto(spot: SpotDTO | null): SpotDTO {
        if (spot === null) return null as any;
        return {
            _id : spot._id,
            addresseSpot: spot.addresseSpot, 
            createdAt: spot.createdAt
        }
    }
}