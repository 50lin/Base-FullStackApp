// backend/index.js
// REalizamos las importaciones de las dependencias

import express from 'express' // Importamos express para usar sus métodos y propiedades
import router from './routes/user.js' // Importamos el router que define las rutas y sus acciones
import cors from 'cors' // Importamos cors para poder interactuar con el backend que esta en otro servidor
import dotenv from 'dotenv' // Importamos dotenv para leer las variables de entorno

dotenv.config() // Leemos las variables de entorno de nuestro archivo .env

const port = process.env.PORT || 5001 // Definimos el puerto que escuchará el backend

const app = express() // Creamos la aplicación express

app.use(express.json()) // Habilitamos el uso de JSON en la aplicación
app.use(cors()) // Habilitamos el uso de CORS en la aplicación
app.use('/api', router) // Definimos la ruta de la aplicación, aqui se uso "api" antes del nombre de la ruta (opciona)

// Ruta del backend para pruebas de funcionamiento en la direccion raiz
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!') // Enviamos un mensaje de bienvenida a la aplicación en la ruta raiz
})

// Iniciamos el servidor en el puerto 5001 e imprimimos un mensaje de consola de bienvenida
app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`)
})

export default app // Exportamos la aplicación
