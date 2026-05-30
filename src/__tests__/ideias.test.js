const request = require('supertest');
const app = require('../server');
const mongoose = require('mongoose');

describe('GET /api/ideia', () => {
  test('deve retornar status 200', async () => {
    const response = await request(app).get('/api/ideia');
    expect(response.status).toBe(200);
  },10000);
});



afterAll(async () => {
  await mongoose.connection.close();
});