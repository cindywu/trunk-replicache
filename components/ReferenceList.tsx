import React from 'react'
import Reference from './Reference'
import { useSubscribe } from 'replicache-react-util'

type Props = {
  replicache: any
}

export default function ReferenceList({ replicache } : Props) {
  console.log('replicache', replicache)
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
