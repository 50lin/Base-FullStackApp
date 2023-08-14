import mongoose from '../db/dbConfig.js' // Importamos mongoose para conectar con la base de datos

// Definimos la estructura de la base de datos MongoDB con mongoose creando un nuevo esquema y lo llamamos UserSchema
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true
    },
    password: {
      type: String,
      required: true,
      min: 5
    },
    picturePath: {
      type: String,
      default: ''
    },
    friends: {
      type: Array,
      default: []
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number
  },
  {
    timestamps: true // Indica que la fecha de creación y actualización se guardarán
  }
)

const User = mongoose.model('User', UserSchema) // Creamos el modelo de la base de datos llamado User, con el esquema que creamos anteriormente llamado UserSchema

export default User // Exportamos el modelo de la base de datos User para ser usado por los controladores y sus funciones de lectura, actualización, creación y eliminación
