//Requerir modulos
import express from "express"
import router from './routers/tour_routes.js'

//Inicializaciones
const app = express()

//Variables globales
//en .env se colocan las variables sencibles, como claves o alguna variable que afecte al proyecto
app.set("port",process.env.port || 3000)

//middleware
app.use(express.json())

//RUTAS

//Ruta principal
app.get("/",(req,res)=>{
    res.send("ok")
})
//Rutas para el tour
app.use("/api",router)

//Rutas para el usuario


//Rutas para las reservas


//exportar la instancia de app
export default app
//cada vez que exporte algo, se tiene que importar

