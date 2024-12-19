import { Request, Response } from 'express'

async function Get(req: Request, res: Response) {
  res.json({ status: 'Hello from Node app' })
}

export default {
  Get
}