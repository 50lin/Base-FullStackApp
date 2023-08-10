import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

// Conexión a MongoDB Atlas
const mongoURI = process.env.MONGO_URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conexión exitosa con MongoDB Atlas')
}).catch((error) => {
  console.error('Error al conectar con MongoDB Atlas:', error)
})

export default mongoose
