import { getDB } from '../../db'

export default async (req: any, res: any) => {
  const pull = req.body
  console.log(`Processing pull`, JSON.stringify(pull, null, ''))
  const t0 = Date.now()

  try {
    const db = await getDB()
    db.tx(async t => {
      const lastMutationID = parseInt(
        (
          await db.oneOrNone(
            'SELECT last_mutation_id FROM replicache_client WHERE id = $1',
            pull.clientID
          )
        )?.last_mutation_id ?? '0'
      )
      const changed = await db.manyOrNone(
        'SELECT id, name, parent, date, description, archived FROM reference WHERE version > $1',
        parseInt(pull.cookie ?? 0)
      )
      const cookie = (
        await db.one('SELECT MAX(version) as version FROM reference')
      ).version
      console.log({cookie, lastMutationID, changed})

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
            description: row.description,
            archived: row.archived
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

//   res.json({
//     lastMutationID: 0,
//     cookie: null,
//     patch: [
//       {op: 'clear'},
//       { op: 'put',
//         key: 'reference/91a853c1-7a57-4f05-934d-2150c3e513de',
//         value: {
//           name: 'Clery 2013',
//           parent: 'Wurzel 202X',
//           date: 'Apr 10',
//           description: 'someone said i should read this'
//         }
//       },
//       {
//         op: 'put',
//         key: 'reference/eb20f773-7f67-4554-a05a-d6b34d37c7c2',
//         value: {
//           name: 'Bromberg 1982',
//           parent: 'Wurzel 202X',
//           date: 'Apr  ',
//           description: 'someone said i should read this',
//         }
//       }
//     ]
//   })
//   res.end()
// }