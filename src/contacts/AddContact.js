import React, { useState } from 'react'
import { CCol, CFormInput, CForm } from '@coreui/react'
import { json } from 'react-router-dom'

const AddContact = () => {
  // const [contact, setContact] = useState({})
  const [name, setName] = useState({})
  const [email, setEmail] = useState({})
  const [phone, setPhone] = useState({})
  const [message, setMessage] = useState({})

  const uploadContactDetails = async (event) => {
    event.preventDefault()

    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, phone: phone, message: message }),
    }

    const response = await fetch('http://localhost:8000/contacts', requestOptions)
    const resData = await response.json()
    console.log(resData)
    // setContacts(resData)
  }
  return (
    <>
      <CForm className="row g-3" method="post" onSubmit={uploadContactDetails}>
        <CCol md={12}>
          <CFormInput
            type="text"
            id="name"
            name="name"
            label="Name"
            className='formlabel'
            onChange={(event) => {
              setName(event.target.value)
            }}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="email"
            name="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="number"
            id="phone"
            name="phone"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </CCol>
        <CCol md={12}>
          <CFormInput
            type="text"
            id="message"
            name="message"
            label="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </CCol>
        <CCol md={12}>
          <CFormInput type="submit" name="submit" />
        </CCol>
      </CForm>
    </>
  )
}

export default AddContact
