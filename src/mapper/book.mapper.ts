import { BookDTO } from "../dto/book.dto"; 
import { Book } from "../models/book.models"; 

export class BookMapper {
    static mapToDto(book: BookDTO | null): BookDTO {
        if (book === null) return null as any;
        return {
            _id : book._id,
            nameBook: book.nameBook, 
            authorBook: book.authorBook,
            date: book.date,
            code: book.code,
            spotID: book.spotID,
            createdAt: book.createdAt
        }
    }
}