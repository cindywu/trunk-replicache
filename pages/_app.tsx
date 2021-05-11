import React, { useState, useEffect } from 'react'
import '../styles/global.css'
import { Replicache } from 'replicache'
import { v4 as uuidv4 } from 'uuid'
import Pusher from 'pusher-js'

type Props = {
  Component: React.ComponentClass
}

type ReferenceContextType = {
  replicache: any
  showReferenceAdd: boolean
  handleReferenceAdd: (newReference: any) => void
  handleShowReferenceAdd: () => void

}

const defaultContextValue = {
  replicache: null,
  showReferenceAdd: false,
  handleReferenceAdd: (newReference: any) => {},
  handleShowReferenceAdd: () => {}
}

export const ReferenceContext = React.createContext<ReferenceContextType>(defaultContextValue)

export default function _App({ Component }: Props) {
  const [replicache, setReplicache] = useState<any>(null)
  const [showReferenceAdd, setShowReferenceAdd] = useState<boolean>(false)

  const referenceContextValue = {
    replicache,
    showReferenceAdd,
    handleReferenceAdd,
    handleShowReferenceAdd,
  }

  function handleShowReferenceAdd() {
    setShowReferenceAdd(!showReferenceAdd)
  }

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
      listen(replicache)
      setReplicache(d)
    })()
  }, [])

  function listen(replicache: any) {
    console.log('listening')
    Pusher.logToConsole = true
    const pusher = new Pusher(process.env.NEXT_PUBLIC_REPLICHAT_PUSHER_KEY!, {
      cluster: process.env.NEXT_PUBLIC_REPLICHAT_PUSHER_CLUSTER
    })
    const channel = pusher.subscribe('default')
    channel.bind('poke', () => {
      console.log('got poked')
      replicache.pull()
    })
  }


  function handleReferenceAdd(newReference: any) {
    console.log('i am handleReferenceAdd')
    replicache.mutate.createReference({
      id: uuidv4(),
      name: newReference.name,
      parent: newReference.parent,
      date: newReference.date,
      description: newReference.description
    })
    setShowReferenceAdd(!showReferenceAdd)
  }

  return (
    <ReferenceContext.Provider value={referenceContextValue}>
      <Component />
    </ReferenceContext.Provider>
  )
}
