import React from 'react'
import '../css/Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1 className="logo"><i className="fa-solid fa-address-card logoIcon"></i>Cloud Contact</h1>
        <ul className="navList">
            <li className="user">Hello Sultans Dine</li>
            <li className="logout"><i className="fa-solid fa-right-from-bracket logoutIcon"></i><b>Logout</b></li>
        </ul>
    </nav>   
  )
}

export default Navbar
