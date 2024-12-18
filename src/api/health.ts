import { pgClient } from '~/utils/postgres'
import { redisClient } from '~/utils/redis'
import { Request, Response } from 'express'

export async function GetHealthPostgres(req: Request, res: Response) {
  try {
    const result = await pgClient.query('SELECT 1')
    if (result) {
      res.send({ status: 'ok', message: 'Postgres is ready' })
    } else {
      res.status(500).send({ status: 'error', message: 'Postgres query failed' })
    }
  } catch (err: any) {
    res.status(500).send({ status: 'error', message: 'Postgres connection error', error: err.message })
  }
}

export async function GetHealthRedis(req: Request, res: Response) {
  try {
    const ping = await redisClient.ping()
    if (ping === 'PONG') {
      res.send({ status: 'ok', message: 'Redis is ready' })
    } else {
      res.status(500).send({ status: 'error', message: 'Redis ping failed' })
    }
  } catch (err: any) {
    res.status(500).send({ status: 'error', message: 'Redis connection error', error: err.message })
  }
}
