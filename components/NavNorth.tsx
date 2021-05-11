import React from 'react'
import styles from './nav-north.module.css'

type Props = {
  handleReferenceAdd: () => void
}

export default function NavNorth({ handleReferenceAdd }: Props) {
  function handleClick() {
    console.log('handleClick')
    handleReferenceAdd()
  }

  return (
    <div className={styles.container}>
    <button 
      className="btn btn--add-reference" 
      onClick={() => handleClick()}
    >+</button>
  </div>
  )
}
