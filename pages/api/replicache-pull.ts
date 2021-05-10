export default async (req, res) => {
  res.status(500)
  res.json({
    lastMutationID: 10,
    cookie: null,
    patch: [
      {op: 'clear'},
      { op: 'put',
        key: 'reference/91a853c1-7a57-4f05-934d-2150c3e513de',
        value: {
          name: 'Clery 2013',
          parent: 'Wurzel 202X',
          date: 'Apr 10',
          description: 'someone said i should read this'
        }
      },
      {
        op: 'put',
        key: 'reference/eb20f773-7f67-4554-a05a-d6b34d37c7c2',
        value: {
          name: 'Bromberg 1982',
          parent: 'Wurzel 202X',
          date: 'Apr  ',
          description: 'someone said i should read this',
        }
      }
    ]
  })
  res.end()
}