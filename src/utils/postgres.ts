import { Client } from 'pg'

const pgClient = new Client({
  connectionString: process.env.DATABASE_URL
})

pgClient
  .connect()
  .then(() => console.log('Connected to Postgres'))
  .catch((err) => console.error('Postgres connection error:', err))

export { pgClient }