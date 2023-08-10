// backend/index.js
import express from 'express'
import router from './routes/user.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT || 5001

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

// Rutas del backend
app.get('/', (req, res) => {
  res.send('¡Hola desde el backend!')
})

app.listen(port, () => {
  // console.log('Servidor backend escuchando en el puerto XXXX')
  console.log(`Servidor backend escuchando en el puerto ${port}`)
})

export default app
