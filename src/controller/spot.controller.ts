const { Router } = require('express')

import { spotHandler } from "../core/init";

export const spotController = Router();

/**
 * @swagger
 * tags:
 *      name: Spots
 *      description: Manage spots
 */

/**
 * @openapi
 * /api/spots:
 *   get:
 *      tags: [Spots]
 *      description: Get list of spots
 *      responses:
 *        200:
 *          description: Get all.
 */
spotController.get('/', spotHandler.getSpots)

/**
 * @openapi
 * /api/spots/{id}:
 *   get:
 *      tags: [Spots]
 *      description: Get spot by id.
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
spotController.get('/:id', spotHandler.getSpotById)

/**
 * @openapi
 * /api/spots:
 *   post:
 *      tags: [Spots]
 *      description: Create a new spot.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "nameBook": "Mon livre", "authorBook": "Leo", "spotID": '12'}
 *      responses:
 *        200:
 *          description: Create.
 */
spotController.post('/', spotHandler.createSpot)


/**
 * @openapi
 * /api/spots/{id}:
 *  put:
 *      tags: [Spots]
 *      description: Update a spot.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         default: 15
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "nameBook": "Mon livre update", "authorBook": "Leo", "userId": null, "spotID": '13'}
 *      responses:
 *        200:
 *          description: Update.
 */
spotController.put('/:id', spotHandler.updateSpot)

/**
 * @openapi
 * /api/spots/{id}:
 *  delete:
 *      tags: [Spots]
 *      description: Delete a spot
 *      parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         type: string
 *         default: 15
 *      responses:
 *        200:
 *          description: Delete.
 */
spotController.delete('/:id', spotHandler.deleteSpot)