import React, { useState } from 'react'
import North from '../components/North'
import East from '../components/East'
import South from '../components/South'
import West from '../components/West'
import { v4 as uuidv4 } from 'uuid'
import styles from '../styles/home.module.css'
import { IReference } from '../interfaces'

export default function Home() {
  const [references, setReferences] = useState<IReference[]>(sampleReferences)

  function handleReferenceAdd() {
    console.log('handleReferenceAdd')
  }

  return (
    <>
      <div className={styles.container}>
        <West />
        <div className={styles.center}>
          <North 
            handleReferenceAdd={handleReferenceAdd}
          />
          <South 
            references={sampleReferences}
          />
        </div>
        <East />
      </div>
    </>
  )
}

const sampleReferences = [
  {
    id: uuidv4(),
    name: 'Clery 2013',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
  },
  {
    id: uuidv4(),
    name: 'Bromberg 1982',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
  },
  {
    id: uuidv4(),
    name: 'Wurden 2016',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
  },
  {
    id: uuidv4(),
    name: 'Kirpatrick 1995',
    parent: 'Wurzel 202X',
    date: 'Apr 10',
    description: 'someone said i should read this',
  },
  {
    id: uuidv4(),
    name: 'Harchol et al. 2020',
    parent: '',
    date: 'Apr 10',
    description: 'A public option for the core',
  }
]
