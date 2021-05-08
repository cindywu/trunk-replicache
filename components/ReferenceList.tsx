import React from 'react'
import Reference from './Reference'
import { IReference } from '../interfaces'

type Props = {
  references: IReference[]
}

export default function ReferenceList({ references } : Props) {
  return (
    <div>
      {references.map((reference : any) => {
        return <Reference key={reference.id} {...reference} />
      } )}
    </div>
    
  )
}
