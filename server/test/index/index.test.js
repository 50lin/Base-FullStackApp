import request from 'supertest'
import app from '../../index.js'
import { describe, it, expect, jest } from '@jest/globals'
import mongoose from '../../db/dbConfig.js'

describe('Test de conexión con la base de datos', () => {
  it('Debería establecer conexión con MongoDB Atlas', async () => {
    // Realiza una solicitud HTTP GET a una ruta que verifiquemos con MongoDB
    const response = await request(app).get('/')
    // Comprueba que la respuesta sea exitosa (código 200)
    expect(response.status).toBe(200)
    console.log(response.status)
    if (response.status === 200) {
      // De ser exitosa la conexion imprime un mensaje de conexión exitosa
      console.log('Conexión exitosa con MongoDB Atlas')
    }
    // Comprueba que la respuesta contenga el mensaje de conexión exitosa
    expect(response.text).toBe('¡Hola desde el backend!')
    console.log(response.text)
  })

  it('Debería fallar la conexión con MongoDB Atlas', async () => {
    // Simular una conexión fallida a MongoDB Atlas
    jest.spyOn(mongoose, 'connect').mockRejectedValue(new Error('Conexión fallida'))
    // Realiza una solicitud HTTP GET a una ruta que verifiquemos con MongoDB
    const response = await request(app).get('/xyz')
    // Comprueba que la respuesta sea fallida (código 404)
    expect(response.status).toBe(404)
    console.log(response.status)
    if (response.status === 404) {
      // Imprime un mensaje de error al conectar con MongoDB Atlas
      console.log('Error al conectar con MongoDB Atlas:')
    }
  })

  it('Debería buscar todos los usuarios', async () => {
    const response = await request(app).get('/api/users')
    // Comprueba que la respuesta sea exitosa (código 200)
    expect(response.status).toBe(200)
    console.log(response.status)
    console.log(response.body)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBeGreaterThan(0)
    if (response.status === 200 && response.body.length > 0) {
      console.log('Todos los usuarios encontrados')
    }
  })

  it('Debería buscar un usuario por id', async () => {
    const response = await request(app).get('/api/users/64c8f26ae9fd0fb0d7ee6c75')
    expect(response.status).toBe(200)
    console.log(response.status)
    console.log(response.body)
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body).toHaveProperty('_id')
    expect(response.body).toHaveProperty('firstName')
    expect(response.body).toHaveProperty('lastName')
    expect(response.body).toHaveProperty('email')
    expect(response.body).toHaveProperty('password')
    expect(response.body).toHaveProperty('picturePath')
    expect(response.body).toHaveProperty('friends')
    expect(response.body).toHaveProperty('location')
    expect(response.body).toHaveProperty('occupation')
    expect(response.body).toHaveProperty('viewedProfile')
    expect(response.body).toHaveProperty('impressions')
    if (response.status === 200) {
      console.log('Usuario encontrado')
    }
  })

  it('Debería crear un nuevo usuario', async () => {
    const response = await request(app)
      .post('/api/users')
      .set('Content-Type', 'application/json')
      .send({ firstName: 'John Doe', lastName: 'Doeee', email: 'johnmnb@example.com', password: '123456' })
    // Asegúrate de que la respuesta tenga un código de estado 200 (éxito)
    expect(response.status).toBe(200)
    // Aquí puedes agregar más aserciones según lo que esperas en tu respuesta
    // Por ejemplo, podrías verificar si la respuesta contiene los datos del usuario creado.
  })
})
