import React from 'react'
import './Home.css'
import LeftSide from '../../components/LeftSide'
import RightSide from '../../components/RightSide'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <main className='container'>
        <LeftSide />
        <RightSide />
      </main>
    </>
    
  )
}

export default Home
