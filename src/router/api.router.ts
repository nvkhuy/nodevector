import express, { Router } from 'express'
import cors from 'cors'
import homeController from '~/controller/home.controller'
import healthController from '~/controller/health.controller'

const api = express.Router()
api.use(cors())
api.use(express.json())

api.get('/', homeController.Get)
api.get('/health/pgvector', healthController.GetRedis)
api.get('/health/redis', healthController.GetPostgres)

export { api as apiRouter }