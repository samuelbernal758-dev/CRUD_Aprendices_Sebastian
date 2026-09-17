const {Router} = require("express")

const pruebaRouter = require("./pruebaRouter")
const enrutador = Router()

enrutador.use("/rutaPrueba", pruebaRouter)

module.exports = enrutador

