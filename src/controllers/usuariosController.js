const { listarTodo, crear } = require("../services/usuariosService");

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await listarTodo();
        res.status(200).json(usuarios);
    } catch(error) {
        res.status(500).json({ Error: error.message });
    }
};

const crearUsuario = async (req, res) => {
    try {
        const {email, usuario, clave} = req.body;
        const usuarioNuevo = await crear({email, usuario, clave});
        res.status(201).json(usuarioNuevo);
    } catch(error) {
        res.status(500).json({ Error: error.message });
    }
};

module.exports = { listarUsuarios,crearUsuario };
