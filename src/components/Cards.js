import React from 'react'
import '../css/Cards.css'
import R from '../assets/img/R.png';

const Cards = ({name, email, phone}) => {
  return (
      <section className="cards">
        <section className="card">
            <div className="cardLeft">
                <h2 className="userName">{name}</h2>
                <p className="userMail"><i className="fa-solid fa-envelope-open userIcon"></i>{email}</p>
                <p className="userPhone"><i className="fa-solid fa-phone userIcon"></i>{phone}</p>
                <div className="userButtons">
                    <button className="edit">Edit</button>
                    <button className="del">Delete</button>
                </div>
            </div>
            <div className="cardRight">
                <button className="typePro">Professional</button>
                <img src={R} alt="ishan" width="100px" height="100px" />
            </div>
        </section>
       </section>
  )
}

export default Cards
