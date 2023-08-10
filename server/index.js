// backend/index.js
import express from 'express'

import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

// Conexión a MongoDB Atlas
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  // console.log('Conexión exitosa con MongoDB Atlas')
}).catch((error) => {
  console.error('Error al conectar con MongoDB Atlas:', error)
})

// Rutas del backend
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!')
})

app.listen(port, () => {
  // console.log('Servidor backend escuchando en el puerto XXXX')
  console.log(`Servidor backend escuchando en el puerto ${port}`)
})

export default app
