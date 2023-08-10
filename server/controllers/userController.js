import User from '../models/user.js'

const createUser = async (req, res) => {
  const user = new User(req.body)
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

// get all user
const getAllUsers = async (req, res) => {
  User
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

// get user por id
const getUserById = async (req, res) => {
  const { id } = req.params
  User
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

// modificar usuario
const updateUser = async (req, res) => {
  const { id } = req.params
  const { firstName, lastName, email, password, picturePath, friends, location, occupation, viewedProfile, impressions } = req.body
  User
    .updateOne({ _id: id }, { $set: { firstName, lastName, email, password, picturePath, friends, location, occupation, viewedProfile, impressions } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

// borrar un usuario
const deleteUser = async (req, res) => {
  const { id } = req.params
  User
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }))
}

export { getAllUsers, getUserById, createUser, updateUser, deleteUser }
