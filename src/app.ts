import 'dotenv/config'
import express from 'express'
import { GetHealthPostgres, GetHealthRedis } from './api/health'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send({ status: 'ok' })
})
app.get('/health/pgvector', GetHealthPostgres)
app.get('/health/redis', GetHealthRedis)

app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}/`)
})
