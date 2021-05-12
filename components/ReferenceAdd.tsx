import React, { useRef, useContext } from 'react'
import styles from './ReferenceAdd.module.css'
import { v4 as uuidv4 } from 'uuid'
import { ReferenceContext } from '../pages/_app'

export default function ReferenceAdd() {
  const { handleReferenceAdd } = useContext(ReferenceContext)

  const nameRef = useRef<HTMLInputElement>(null)
  const parentRef = useRef<HTMLInputElement>(null)
  const titleRef = useRef<HTMLTextAreaElement>(null)

  function handleSaveReference(){
    const newReference = {
      id: uuidv4(),
      name: nameRef.current ? nameRef.current.value : '',
      parent: parentRef.current ? parentRef.current.value : '',
      date: 'May 10',
      description: titleRef.current ? titleRef.current.value : '',
      archived: false
    }
    handleReferenceAdd(newReference)
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
        <div className={styles.title}>
          {/* New reference */}
        </div>
        <div className={styles.buttonContainer}>
          <button className="btn btn--secondary">Expand</button>
          <button
            className="btn btn--secondary"
            // onClick={handleShowReferenceAdd}
          >&times;</button>
        </div>
      </div>
      <div className={styles.detailsGrid}>
        <input
          type="text"
          autoComplete="off"
          name="name"
          id={styles.name}
          className={styles.input}
          placeholder="name"
          ref={nameRef}
        />
        <input
          type="text"
          autoComplete="off"
          name="parent"
          id="parent"
          className={styles.input}
          placeholder="parent"
          ref={parentRef}
        />
        <textarea
          name="description"
          id="description"
          className={styles.input}
          placeholder="title"
          ref={titleRef}
        />
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.left}>
          <button className="btn btn--secondary">
            Attach file
          </button>
        </div>
        <div className={styles.right}>
          <button
            className="btn btn--primary"
            onClick={() => handleSaveReference()}
          >
            Save Reference
          </button>
        </div>
      </div>
      </div>
    </>
  )
}
