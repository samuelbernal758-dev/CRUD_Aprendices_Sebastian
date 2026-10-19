const {Router} = require("express");
const enrutador = Router();
const {listarUsuarios, crearUsuario } = require("../controllers/usuariosController");

enrutador.get("/listado", listarUsuarios)
enrutador.post("/crear", crearUsuario)

module.exports = enrutador;