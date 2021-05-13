import pgInit from 'pg-promise'
const pgp = pgInit()
const db = pgp({
  connectionString: process.env.REPLICHAT_DB_CONNECTION_STRING,
})

export async function getDB() {
  await db.connect()
  return db
}

