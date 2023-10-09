import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { gameSchema } from "../schemas/games.schema.js";
import { gamesController } from "../controllers/games.controller.js";


const gamesRouter = Router()

gamesRouter.get("/games")
gamesRouter.post("/games", validateSchema(gameSchema), gamesController.createGame)

export default gamesRouter