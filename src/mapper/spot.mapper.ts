import { SpotDTO } from "../dto/spot.dto"; 


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