import React from 'react'
import Cards from './Cards'
import SearchBar from './SearchBar'
import '../css/RightSide.css'

const RightSide = () => {
  return (
    <section className='rightSide'>
      <SearchBar />
      <Cards />
    </section>
  )
}

export default RightSide