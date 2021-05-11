import React, { useContext } from 'react'
import Reference from './Reference'
import { useSubscribe } from 'replicache-react-util'
import { ReferenceContext } from '../pages/_app'

export default function ReferenceList() {
  const { replicache } = useContext(ReferenceContext)

  const references = useSubscribe(
    replicache,
    async tx => {
      const list = await tx.scan({prefix: 'reference/'}).entries().toArray()
      console.log('list', list)
      return list
    },[])

  return (
    <div>
      {references.map(([k, v]) => {
        return (
          <Reference key={k} value={v} />
        )
      })}
    </div>

  )
}
