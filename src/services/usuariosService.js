const ormPrisma = require("../config/db")
const datosBD = [{"nombre": "jhonny", "cargo":"Instructor SENA"}]

const listarTodo = async() => { 
    const datos = ormPrisma.Usuarios.findMany()
    return datos
}

const crear = async ({ email, usuario, clave }) => { 
    const nuevoUsuario = await ormPrisma.Usuarios.create({
        data: {
            email,   
            usuario,  
            clave    
        }
    });
    return nuevoUsuario;
};

module.exports = {listarTodo, crear};
