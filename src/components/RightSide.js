import React, { useEffect } from 'react'
import Cards from './Cards'
import SearchBar from './SearchBar'
import '../css/RightSide.css'
import axios from 'axios'

const RightSide = () => {

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map(data => {
      return data.name;
    }))
   } , []);

  return (
    <section className='rightSide'>
      <SearchBar />
      <Cards />
    </section>
  )
}

export default RightSide