import React, { useState } from 'react'
import Cards from './Cards';
import '../css/ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState(false);
  const [data, setData] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, {name, email, phone}])
    
  }

  return (
    <>
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="formTitle">Add Contact</h1>
      <input type="text" className="formFields" placeholder="Name" onChange={(e) => setName(e.target.value)} /><br />
      <input type="email" className="formFields" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/><br />
      <input type="text" className="formFields" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
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

    {data.length > 0 && data.map((obj) => <Cards name={obj.name} email={obj.email} phone={obj.phone} />)}
    </>
  )
}

export default ContactForm
