import React from 'react'
import { IReference } from '../interfaces'
import styles from './reference.module.css'

export default function Reference({ name, parent, date, description }: IReference) {
  return (
    <div className={styles.container}>
      <div>
        <span>{name}</span>
        <span>{` › `}</span>
        <span>{parent}</span>
        <span>{`  `}</span>
        <span>{description}</span>
      </div>
      <div>
        <span>{date}</span>
      </div>
      
    </div>
  )
}
