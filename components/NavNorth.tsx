import React, { useContext } from 'react'
import styles from './nav-north.module.css'
import ReferenceAdd from './ReferenceAdd'
import { ReferenceContext } from '../pages/_app'

export default function NavNorth() {
  const { showReferenceAdd, handleShowReferenceAdd } = useContext(ReferenceContext)

  function handleAddReference() {
    handleShowReferenceAdd()
  }

  return (
    <>
      {showReferenceAdd &&
        <ReferenceAdd />
      }
      <div className={styles.container}>
        <button
          className="btn btn--add-reference"
          onClick={() => handleAddReference()}
        >+</button>
      </div>
    </>
  )
}
