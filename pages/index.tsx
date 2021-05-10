import React, { useState, useEffect } from 'react'
import North from '../components/North'
import East from '../components/East'
import South from '../components/South'
import West from '../components/West'
import styles from '../styles/home.module.css'
import { Replicache } from 'replicache'
import { v4 as uuidv4 } from 'uuid'


export default function Home() {
  const [replicache, setReplicache] = useState<any>(null)

  useEffect(() => {
    (async () => {
      const replicache = new Replicache({
        pushURL: '/api/replicache-push',
        pullURL: '/api/replicache-pull',
        wasmModule: '/replicache.dev.wasm',
        mutators: {
          async createReference(tx, {id, name, parent, date, description}) {
            await tx.put(`reference/${id}`, {
              name,
              parent,
              date,
              description
            })
          }
        }
      })
      const d = await replicache
      setReplicache(d)
    })()
  }, [])

  function handleReferenceAdd() {
    replicache.mutate.createReference({
      id: uuidv4(),
      name: 'new',
      parent: 'new parent',
      date: 'May 9',
      description: 'hello i am mac'
    })
  }

  return (
      <>
        <div className={styles.container}>
          <West />
          <div className={styles.center}>
            <North 
              handleReferenceAdd={handleReferenceAdd}
            />
            {replicache &&
              <South 
                replicache={replicache}
              />
            } 
          </div>
          <East />
        </div>
      </>
  )
}
