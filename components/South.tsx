import React from 'react'
import ReferenceList from './ReferenceList'
import { IReference } from '../interfaces'
import styles from './south.module.css'

type Props = {
  references: IReference[]
} 

export default function South({ references }: Props) {
  return (
    <div className={styles.container}>
       <ReferenceList 
        references={references}
      />
    </div>
  )
}
