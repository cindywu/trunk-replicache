import React, { useContext } from 'react'
import styles from './reference.module.css'
import { ReferenceContext } from '../pages/_app'

export default function Reference({ value, k }: any) {
  const { handleReferenceDelete } = useContext(ReferenceContext)
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
        <span className="mr-1">{value.date}</span>
        <button
          className="btn"
          onClick={() => handleReferenceDelete(k)}
        >Delete</button>
      </div>

    </div>
  )
}
