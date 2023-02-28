import React from 'react'
import '../css/Cards.css'
import R from '../assets/img/R.png';

const Cards = () => {
  return (
      <section className="cards">
                <section className="card">
                    <div className="cardLeft">
                        <h2 className="userName">Ishan Sarkar</h2>
                        <p className="userMail"><i className="fa-solid fa-envelope-open userIcon"></i>ishan@gmail.com</p>
                        <p className="userPhone"><i className="fa-solid fa-phone userIcon"></i>01719058105</p>
                        <div className="userButtons">
                            <button className="edit">Edit</button>
                            <button className="del">Delete</button>
                        </div>
                    </div>
                    <div className="cardRight">
                        <button className="typePer">Personal</button>
                        <img src={R} alt="ishan" width="100px" height="100px" />
                    </div>
                </section>
                <section className="card">
                    <div className="cardLeft">
                        <h2 className="userName">Erafi Ahonaf</h2>
                        <p className="userMail"><i className="fa-solid fa-envelope-open userIcon"></i>erafi@gmail.com</p>
                        <p className="userPhone"><i className="fa-solid fa-phone userIcon"></i>01719058105</p>
                        <div className="userButtons">
                            <button className="edit">Edit</button>
                            <button className="del">Delete</button>
                        </div>
                    </div>
                    <div className="cardRight">
                        <button className="typePro">Professional</button>
                        <img src={R} alt="erafi" width="100px" height="100px" />
                    </div>
                </section>
                <section className="card">
                    <div className="cardLeft">
                        <h2 className="userName">John Doe</h2>
                        <p className="userMail"><i className="fa-solid fa-envelope-open userIcon"></i>jdoe@gmail.com</p>
                        <p className="userPhone"><i className="fa-solid fa-phone userIcon"></i>01719058105</p>
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
