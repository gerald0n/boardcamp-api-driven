import { gamesRepository } from '../repositories/games.repository.js'

async function createGame({ name, image, stockTotal, pricePerDay }) {
   if (stockTotal <= 0 || pricePerDay <= 0) throw { type: 'vazio', message: 'valores vazios.' }

   const game = await gamesRepository.findGameWithNameDB(name)

   if (game) throw { type: 'duplicado', message: 'já existe um game cadastrado com esse nome.' }

   await gamesRepository.newGameDB(name, image, stockTotal, pricePerDay)
}

export const gamesService = { createGame }
