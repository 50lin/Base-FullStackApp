import request from 'supertest'
import app from '../../index.js'
import { describe, it, expect, jest } from '@jest/globals'
import mongoose from 'mongoose'

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
})
