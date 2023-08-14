// Importamos express para usar sus métodos y propiedades
import express from 'express'

// Importamos las funciones desde el archivo "userControllers" para poder hacer las peticiones
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js'

const router = express.Router() // Creamos el router para definir las rutas

// Definimos la ruta para la creación de un nuevo usuario desde la ruta /users
router.post('/create-user', (req, res) => {
  createUser(req, res)
})

// Definimos la ruta para obtener todos los usuarios desde la ruta /users
router.get('/users', (req, res) => {
  getAllUsers(req, res)
})

// Definimos la ruta para obtener un usuario por id desde la ruta /users/:id
router.get('/users/:id', (req, res) => {
  getUserById(req, res)
})

// Definimos la ruta para actualizar un usuario desde la ruta /users/:id
router.put('/users/:id', (req, res) => {
  updateUser(req, res)
})

// Definimos la ruta para eliminar un usuario desde la ruta /users/:id
router.delete('/users/:id', (req, res) => {
  deleteUser(req, res)
})

export default router // Exportamos el router hacia la el index.js de la app en la carpeta server
