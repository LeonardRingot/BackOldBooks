import { BookHandler } from "../handler/book.handler";
import { BookService } from "../service/book.service";
import { BookRepository } from "../repository/book.repository";

import { SpotHandler } from "../handler/spot.handler";
import { SpotService } from "../service/spot.service";
import { SpotRepository } from "../repository/spot.repository";

import { ListuserHandler } from "../handler/listuser.handler";
import { ListuserService } from "../service/listuser.service";

export const bookHandler = new BookHandler(new BookService(new BookRepository))
export const listuserHandler = new ListuserHandler(new ListuserService)
export const spotHandler = new SpotHandler(new SpotService(new SpotRepository))