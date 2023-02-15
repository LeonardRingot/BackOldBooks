import mongoose from 'mongoose'
import { Book } from '../models/book.models';
import { Spot } from '../models/spot.model';
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@oldbookclusteratlas.annxhk3.mongodb.net/test`

export async function databaseConnect() {
    mongoose.set('strictQuery', true)
    await mongoose.connect(uri);

    const book1 = {
        nameBook: "livre1",
        authorBook: "bah c moi",
        date: null,
        userId: null,
        spotID: '15',
    }
    const book2 = {
        nameBook: "livre 2",
        authorBook: "personne",
        date: null,
        userId: null,
        spotID: '16',
    }

    const newSpot = new Spot({
        addresseSpot: 'ICI C PARIS'
    })
    newSpot.save()

    Book.insertMany([book1, book2])
}