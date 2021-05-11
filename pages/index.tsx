import React, { useContext } from 'react'
import NavNorth from '../components/NavNorth'
import NavEast from '../components/NavEast'
import NavSouth from '../components/NavSouth'
import NavWest from '../components/NavWest'
import styles from '../styles/home.module.css'
import { ReferenceContext } from './_app'

export default function Home() {
  const { replicache } = useContext(ReferenceContext)

  return (
      <>
        <div className={styles.container}>
          <NavWest />
          <div className={styles.center}>
            <NavNorth />
            {replicache &&
              <NavSouth
              />
            }
          </div>
          <NavEast />
        </div>
      </>
  )
}
