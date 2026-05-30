require('dotenv').config();
const request = require('supertest');
const app = require('./src/server');

async function testarAPI() {
  console.log('🧪 Testando GET /api/ideia...');
  
  const response = await request(app)
    .get('/api/ideia')
    .expect(200);
  
  //console.log(response)
  console.log('✅ Status:', response.status);
  console.log('📦 Primeira ideia:', response.body[3]?.titulo || 'Nenhuma ideia cadastrada');
  console.log('🎉 Teste manual concluído!');
}

testarAPI();