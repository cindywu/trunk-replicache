import React from 'react'
import styles from './ReferenceEdit.module.css'

export default function ReferenceEdit() {

  return (
    <div className={styles.container}>
      <div className={styles.navigationButtonContainer}>
        <button
          className="btn btn--secondary"
          // onClick={handleReferenceDeselect}
        >
          &times;
        </button>
      </div>
      <div className={styles.detailsGrid}>
        <label
          htmlFor="name"
          className={styles.label}
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          // value={selectedReference.name}
          // onChange={e => handleChange({ name: e.target.value })}
          className={styles.input} />
        <label
          htmlFor="parent"
          className={styles.label}
        >
          Parent
        </label>
        <input
          type="text"
          name="parent"
          id="parent"
          autoComplete="off"
          // value={selectedReference.parent}
          // onChange={e => handleChange({ parent: e.target.value })}
          className={styles.input} />
        <label
          htmlFor="date"
          className={styles.label}>
          Date
        </label>
        <input
          type="text"
          name="date"
          id="date"
          autoComplete="off"
          // value={selectedReference.date}
          // onChange={e => handleChange({ date: e.target.value })}
          className={styles.input} />
        <label
          htmlFor="description"
          className={styles.label}>
          Description
        </label>
        <textarea
          name="description"
          id="description"
          // onChange={e => handleChange({ description: e.target.value })}
          // value={selectedReference.description}
          className={styles.input} />
      </div>
      <div
        className={styles.buttonContainer}
      >
        <button
          className="btn btn--secondary"
          // onClick={() => handleReferenceArchive(selectedReference.id)}
        >
          Archive
        </button>
      </div>
    </div>

  )
}
