import React from 'react'
import ReferenceList from './ReferenceList'
import styles from './south.module.css'

type Props = {
  replicache: any
} 

export default function South({ replicache }: Props) {
  return (
    <div className={styles.container}>
       <ReferenceList 
        replicache={replicache}
      />
    </div>
  )
}
