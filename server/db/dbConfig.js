import mongoose from 'mongoose' // Importamos mongoose desde mongoose para conectar con la base de datos
import dotenv from 'dotenv' // Importamos dotenv para leer las variables de entorno

dotenv.config() // Leemos las variables de entorno de nuestro archivo .env

const mongoURI = process.env.MONGO_URI // Obtenemos la cadena de conexión a MongoDB Atlas desde el archivo .env

// Configuramos la Conexión a MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  // Si todo va bien imprimimos un mensaje de conexión exitosa
  .then(() => {
    console.log('Conexión exitosa con MongoDB Atlas')
  })
  // Si falla la conexión imprimimos un mensaje de error
  .catch((error) => {
    console.error('Error al conectar con MongoDB Atlas:', error)
  })

export default mongoose // Exportamos nuestra conexión a MongoDB
