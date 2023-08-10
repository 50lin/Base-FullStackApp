import express from 'express'
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userController.js'

const router = express.Router()

// create user
router.post('/users', (req, res) => {
  createUser(req, res)
})

// get all user
router.get('/users', (req, res) => {
  getAllUsers(req, res)
})

// get user por id
router.get('/users/:id', (req, res) => {
  getUserById(req, res)
})

// modificar usuario
router.put('/users/:id', (req, res) => {
  updateUser(req, res)
})

// borrar un usuario
router.delete('/users/:id', (req, res) => {
  deleteUser(req, res)
})

export default router
