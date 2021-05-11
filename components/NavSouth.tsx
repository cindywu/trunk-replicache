import React from 'react'
import ReferenceList from './ReferenceList'
import styles from './nav-south.module.css'

type Props = {
  replicache: any
} 

export default function NavSouth({ replicache }: Props) {
  return (
    <div className={styles.container}>
       <ReferenceList 
        replicache={replicache}
      />
    </div>
  )
}
