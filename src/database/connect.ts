import mongoose from 'mongoose'
//import { Book } from '../models/book.models';
import { Spot } from '../models/spot.model';
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PWD}@oldbookclusteratlas.annxhk3.mongodb.net/test`

export async function databaseConnect() {
    mongoose.set('strictQuery', true)
    await mongoose.connect(uri);
    
    const newSpot = new Spot({
        addresseSpot: 'Rue du régiment de la chaudière'
    });
    newSpot.save((error, spot) => {
        if (error) {
          console.error(error);
        } else {
          console.log('Spot saved successfully!');
          
          // Create two books with spotID set to the new spot's _id
          const { Book } = require('../models/book.models');
          const book1 = new Book({
            nameBook: 'The Witcher: Le dernier Voeu',
            authorBook: 'Andrzej Sapkowski',
            date: null,
            code:null,
            spotID: spot._id
          });
          const book2 = new Book({
            nameBook: "The Witcher: l'epee de la providence",
            authorBook: 'Andrzej Sapkowski',
            date: null,
            code:null,
            spotID: spot._id
          });
          
          book1.save((error: any) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Book 1 saved successfully!');
            }
          });
          
          book2.save((error:any) => {
            if (error) {
              console.error(error);
            } else {
              console.log('Book 2 saved successfully!');
            }
          });
        }
})
}