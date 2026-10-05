const {Router} = require("express")

const pruebaRouter = require("./pruebaRouter")
const autenticarRouter = require("./autenticarRouter")
const usuariosRouter = require("./usuariosRouter")

const enrutador = Router()

enrutador.use("/rutaPrueba", pruebaRouter)
enrutador.use("/autenticar", autenticarRouter)
enrutador.use("/listado", usuariosRouter)

module.exports = enrutador

