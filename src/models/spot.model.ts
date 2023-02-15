import mongoose from 'mongoose'
const { Schema } = mongoose

export const spotSchema = new Schema({
    addresseSpot: String,
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
},
    {
        timestamps: true
    }
)

export const Spot = mongoose.model('Spot', spotSchema)