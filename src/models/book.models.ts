import mongoose from 'mongoose'
const { Schema } = mongoose

export const bookSchema = new Schema({
    nameBook: String,
    authorBook: String,
    date: Date,
    code: String,
    spotID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot',
        default: null
      },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => Date.now()
    }
})
export const Book = mongoose.model('Book', bookSchema)