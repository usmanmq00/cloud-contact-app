import React from 'react'
import '../css/ContactForm.css'

const ContactForm = () => {
  return (
    <section className="form">
      <h1 className="formTitle">Add Contact</h1>
      <input type="text" className="formFields" placeholder="Name" /><br />
      <input type="email" className="formFields" placeholder="Email" /><br />
      <input type="text" className="formFields" placeholder="Phone" />
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
      <input type="submit" className="formSub" value="Add Contact" />
    </section>
  )
}

export default ContactForm
