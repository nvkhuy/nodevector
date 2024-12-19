import 'dotenv/config'
import express, { Express } from 'express'
import http from 'http'
import { pgClient } from '~/utils/postgres'
import { redisClient } from '~/utils/redis'
import { apiRouter } from '~/router/api.router'


const main = async () => {
  const app: Express = express()
  const port = 3000
  app.use('/', apiRouter)

  const server: http.Server = http.createServer(app)
  server.listen(port, () => {
    console.log(`Server running at http://0.0.0.0:${port}/`)
  })

  const onShutdown = async () => {
    console.log('\nShutting down server...')

    server.close(() => {
      console.log('HTTP server closed')
    })
    await pgClient.end().then(() => {
      console.log('Postgres connection closed')
    })
    await redisClient.quit().then(() => {
      console.log('Redis connection closed')
    })
    process.exit(0)
  }

  // Handle process termination signals
  process.on('SIGTERM', onShutdown)
  process.on('SIGINT', onShutdown)
}

main().then(() => {
  console.log('Server starting ...')
})