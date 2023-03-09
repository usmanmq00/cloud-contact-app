import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Cards from './Cards';
import '../css/ContactForm.css'

const ContactForm = () => {
  const { name, email, phone} = useSelector((state) => ({
    id: state.ContactForm.id,
    name: state.ContactForm.name,
    email: state.ContactForm.email,
    phone: state.ContactForm.phone
  }));

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: "INCREMENT_ID"})
    dispatch({type: "FORM_DATA"})
  }

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="formTitle">Add Contact</h1>
      <input type="text" className="formFields" placeholder="Name" onChange={(e) => dispatch({type: 'UPDATE_NAME', payload: e.target.value })} /><br />
      <input type="email" className="formFields" placeholder="Email" onChange={(e) => dispatch({type: 'UPDATE_EMAIL', payload: e.target.value })}/><br />
      <input type="text" className="formFields" placeholder="Phone" onChange={(e) => dispatch({type: 'UPDATE_PHONE', payload: e.target.value })}/>
      <div className="type">
        <h6 className="contactType">Contact Type</h6>
        <div className='space'>
          <input type="radio" className="contype" name="type" /><label>Personal</label>
        </div>
        <div className='space'>
          <input type="radio" className="contype" name="type" /><label>Professional</label>
        </div>
      </div>
      <input type="file" /><br />
      <button className="formSub" value="Add Contact">Add Contact</button>
    </form>
    </>
  )
}

export default ContactForm