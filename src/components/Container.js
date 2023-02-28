import React from 'react'
import '../css/Container.css'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

const Container = () => {
  return (
    <main className='container'>
      <LeftSide />
      <RightSide />
    </main>
  )
}

export default Container
