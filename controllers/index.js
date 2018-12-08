// Este arquivo será usado para exportar todos os controladores
const ActorController = require('./ActorController')
const MovieController = require('./MovieController')

module.exports = {
    actor: ActorController,
    movie: MovieController
}