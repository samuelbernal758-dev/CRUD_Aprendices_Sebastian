const express = require('express');
const app = express();
require('dotenv/config');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.post("/datosJson", (req,res) =>{
    const datosRecibidos = req.body

    if (datosRecibidos){
        res.status(200).json({mensaje: "datos recibidos correctamente"})
    }
    res.status(500).json({Mensaje: "No se recibieron datos"});
})

app.post("/formulario", (req,res) =>{
    const datos = req.body
    res.json({datos: datos})
})

app.listen(port, () => {
    console.log(`SERVER: http://localhost:${port}`);
});