const ingresar = require("../services/autenticarService")
const listarUsuarios = async (req, res) => {
    res.json({"mensaje": "Listado de usuarios"})
}

module.exports = listarUsuarioss