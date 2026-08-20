const express = require('express');
const app = express();
require("dotenv/config")
const port = process.env.PORT || 3030  ;

//librerias
const sistemadeArchivo = require('fs'); //  fs(filesistem) = sistemadeArchivo
const ruta = require('path'); // path = ruta

const rutaArchivoJson = ruta.join(__dirname, 'listaDatos.json');

app.use(express.json());

app.get("/", (req,  res) => {
    res.send('API RESTFUL - CRUD Aprendices')
});

app.get("/aprendices", (req, res) => {
    //const listaaprendices = []
    sistemadeArchivo.readFile(rutaArchivoJson, 'utf8', (error, datos) => { //utf8 = para leer tildes, etc
        if (error) {
            res.status(500).json ({Error: "Error al leer el archivo"});
        }

        const listaaprendices = JSON.parse(datos); //parse = tranformar a json
        res.json(listaaprendices)
    });
})

app.listen(port, () => {
    console.log(`Servidor en funcionamiento en el puerto: http://localhost:${port}`)
});




/*
const listaaprendices = [{
        "nombre":"Juan",
        "edad": 17,
        "correo": "henao@gmail.com",
        "imgperfil":"url"
    },
    {
        "nombre":"Sebastian",
        "edad": 17,
        "correo": "Loaiza@gmail.com",
        "imgperfil":"url"
    },
    {
        "nombre":"Samuel",
        "edad": 16,
        "correo": "Bravobernal@gmail.com",
        "imgperfil":"url"
    }]

app.get("/", (_,  res) => {
    res.send('Hola, estamos aprendiendo expreess con la ficha 3407184')
});
app.get("/aprendices", (req, res) =>{
    res.json(listaaprendices)
})
app.get('/aprendices/:nombre', (req, res) => {
  const nombreBuscado = req.params.nombre.toLowerCase();

  const aprendizencontrado = listaaprendices.find(
    (aprendiz) => aprendiz.nombre.toLowerCase() === nombreBuscado
  );

  res.json(aprendizencontrado);
});
app.post('/aprendicescreado', (req, res) => {
    const { nombre, edad, correo, imgperfil } = req.body;
    
    if (typeof nombre !== 'string' || nombre.trim().length < 3) {
        return res.status(400).json({ "error": "El nombre como mínimo necesita 3 letras" });
    }
    
    if (typeof correo !== 'string' || !correo.includes('@')) {
        return res.status(400).json({ "error": "El correo necesita @" });
    }
    
    const datosAprendiz = { nombre, edad, correo, imgperfil };
    listaaprendices.push(datosAprendiz);
    
    return res.status(201).json({ "mensaje": "Aprendiz creado", "Datos": datosAprendiz });
});

app.put('/aprendizeditado/:nombre', (req, res) => {
    const nombreBuscado = req.params.nombre.toLowerCase();
    const nuevosDatos = req.body;

    const aprendiz = listaaprendices.find(
        (a) => a.nombre.toLowerCase() === nombreBuscado
    );

    Object.assign(aprendiz, nuevosDatos);
    res.json({"mensaje": 'Aprendiz editado con éxito',"Datos": aprendiz});
});

app.delete('/aprendizeliminado/:nombre', (req, res) =>{
    const nombreBuscado = req.params.nombre.toLowerCase();
    const indice = listaaprendices.findIndex(
        (aprendiz) => aprendiz.nombre.toLowerCase() === nombreBuscado
    );
    const [aprendizEliminado] = listaaprendices.splice(indice, 1);
    res.json({mensaje: 'Aprendiz eliminado con éxito',"Datos": aprendizEliminado});
})
*/

