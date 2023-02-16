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


//listuserController.post('/', listuserHandler.Registered)