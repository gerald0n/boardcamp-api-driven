import { Router } from "express";
import gamesRouter from "./games.routes.js";

const routers = Router()

routers.use(gamesRouter)

export default routers