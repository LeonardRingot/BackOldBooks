const { Router } = require('express')

import { bookHandler } from "../core/init";

export const bookController = Router();

/**
 * @swagger
 * tags:
 *      name: Books
 *      description: Manage books
 */

/**
 * @openapi
 * /api/books:
 *   get:
 *      tags: [Books]
 *      description: Get list of books
 *      responses:
 *        200:
 *          description: Get all.
 */
bookController.get('/', bookHandler.getBooks)

/**
 * @openapi
 * /api/books/{id}:
 *   get:
 *      tags: [Books]
 *      description: Get book by id.
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         default: 1
 *      responses:
 *        200:
 *          description: Get by id.
 */
bookController.get('/:id', bookHandler.getBookById)

/**
 * @openapi
 * /api/books:
 *   post:
 *      tags: [Books]
 *      description: Create a new book.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "nameBook": "Mon livre", "authorBook": "Leo","code": null, "date":null, "spotID": '15'}
 *      responses:
 *        200:
 *          description: Create.
 */
bookController.post('/', bookHandler.createBook)


/**
 * @openapi
 * /api/books/{id}:
 *  put:
 *      tags: [Books]
 *      description: Update a book.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         default: 1
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "nameBook": "Mon livre update", "authorBook": "Leo", "code": null, "spotID": '15'}
 *      responses:
 *        200:
 *          description: Update.
 */
bookController.put('/:id', bookHandler.updateBook)

/**
 * @openapi
 * /api/books/{id}:
 *  delete:
 *      tags: [Books]
 *      description: Delete a book
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         default: 1
 *      responses:
 *        200:
 *          description: Delete.
 */
bookController.delete('/:id', bookHandler.deleteBook)