const { Router } = require('express')

import { listuserHandler } from "../core/init";

export const listuserController = Router();

/**
 * @swagger
 * tags:
 *      name: List
 *      description: Manage registered users
 */

/**
 * @openapi
 * /api/list:
 *   get:
 *      tags: [List]
 *      description: Get list of users
 *      responses:
 *        200:
 *          description: Get all.
 */
listuserController.get('/', listuserHandler.getList)

/**
 * @openapi
 * /api/list:
 *   post:
 *      tags: [List]
 *      description: Is registered.
 *      consumes:
 *       - application/json
 *      parameters:
 *       - name: JSON
 *         in: body
 *         required: true
 *         type: object
 *         default: { "code": "43DZFDFR"}
 *      responses:
 *        200:
 *          description: IsRegistered.
 */
listuserController.post('/', listuserHandler.Registered)