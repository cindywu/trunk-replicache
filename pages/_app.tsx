import React from 'react'
import '../styles/global.css'

type Props = {
  Component: React.ComponentClass
}

export default function _App({ Component }: Props) {
  return (
    <>
      <Component />
    </>
  )
}
