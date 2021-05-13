import { getDB } from '../../db'

export default async (req: any, res: any) => {
  const pull = req.body
  console.log(`Processing pull`, JSON.stringify(pull, null, ''))
  const t0 = Date.now()

  try {
    const db = await getDB()
    db.tx(async t => {
      console.log('t', t)
      const lastMutationID = parseInt(
        (
          await db.oneOrNone(
            'SELECT last_mutation_id FROM replicache_client WHERE id = $1',
            pull.clientID
          )
        )?.last_mutation_id ?? '0'
      )
      const changed = await db.manyOrNone(
        'SELECT id, name, parent, date, description FROM reference WHERE version > $1',
        parseInt(pull.cookie ?? 0)
      )
      const cookie = (
        await db.one('SELECT MAX(version) AS version FROM reference')
      ).version
      console.log('heyhey', {cookie, lastMutationID, changed})
      console.log('hellooooo!')

      res.json({
        lastMutationID,
        cookie,
        patch: changed.map(row => ({
          op: 'put',
          key: `reference/${row.id}`,
          value: {
            name: row.name,
            parent: row.parent,
            date: row.date,
            description: row.description
          }
        }))
      })
      res.end()
    })
  } catch (e) {
    console.error(e)
    res.status(500).send(e.toString())
  }
}
