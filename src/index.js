const express = require('express')
const cors = require('cors')
const api = require('./api-request')

// App Express
const app = express()
app.use(express.json())

// Rota única para Post
app.post('/', async (req, res) => {
    await api.getFullAddressFromApi(req, res)
})

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))

// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})

// Inicia o sevidor
app.listen(4000, () => {
    console.log(`Servidor rodando com sucesso em http://localhost:4000`)
})