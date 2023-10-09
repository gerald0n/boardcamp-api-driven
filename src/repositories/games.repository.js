import { db } from '../database/db.connection.js'

function newGameDB(name, image, stockTotal, pricePerDay) {
   return db.query(
      `INSERT INTO games (name, image, "stockTotal", "pricePerDay") VALUES ($1, $2, $3, $4)`,
      [name, image, stockTotal, pricePerDay]
   )
}

async function findGameWithNameDB(nameOfTheGame) {
   const game = await db.query(`SELECT * FROM games WHERE name = $1`, [nameOfTheGame])

   return game.rows[0]
}

export const gamesRepository = { newGameDB, findGameWithNameDB }
