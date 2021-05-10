import React from 'react'
import styles from './reference.module.css'

export default function Reference({ value }: any) {
  return (
    <div className={styles.container}>
      <div>
        <span>{value.name}</span>
        <span>{` › `}</span>
        <span>{value.parent}</span>
        <span>{`  `}</span>
        <span>{value.description}</span>
      </div>
      <div>
        <span>{value.date}</span>
      </div>
      
    </div>
  )
}
