const ormPrisma = require("../config/db")
const datosBD = [{"nombre": "jhonny", "cargo":"Instructor SENA"}]

const listarTodo = async() => { 
    const datos = ormPrisma.Usuarios.findMany()
    return datos
}

const crear = () => {

}

module.exports = {listarTodo, crear};
