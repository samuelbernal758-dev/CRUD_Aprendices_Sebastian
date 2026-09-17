const jswtoken = require("jsonwebtoken")
const ingresar = (usuario, clave) => {
    
    const usuariobd = {
        "usuario": "jhonny",
        "clave": "abc123"   
    }

    if (usuario !== usuariobd.usuario || clave !== usuariobd.clave) {
        return res.json({ mensaje: "Usuario y/o clave incorrectos." })
    }
    const token = jswtoken.sign(
        { usuario: usuario }, 
        process.env.JWT_SECRET, 
        { expiresIn: "1h" } 
    )

    return token 
}
module.exports = ingresar