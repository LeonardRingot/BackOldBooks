import { Router } from "express";
import { swaggerRouter } from "./swagger"

import { listuserController } from "../controller/listuser.controller";
import { bookController } from "../controller/book.controller";
import { spotController } from "../controller/spot.controller";

export const router = Router()

router.use('/docs', swaggerRouter)
router.use('/list', listuserController)
router.use('/books', bookController)
router.use('/spots', spotController)

router.use('*', (req, res) => {
    return res.status(404).json({ message: 'Ressource not found.' })
})