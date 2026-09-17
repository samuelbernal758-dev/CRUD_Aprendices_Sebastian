const jswtoken = require("jsonwebtoken")

const ingresar = require("../services/autenticarService")
const iniciarSesion = async (req, res) => {
    const { usuario, clave } = req.body
    const token = ingresar(usuario, clave)
    res.jswtoken({token})
}

module.exports = iniciarSesion