import { gamesService } from '../services/games.service.js'

async function createGame(req, res) {
   try {
      await gamesService.createGame(req.body)

      res.sendStatus(201)
   } catch (error) {
      res.status(500).send(error.message)
   }
}

export const gamesController = { createGame }
