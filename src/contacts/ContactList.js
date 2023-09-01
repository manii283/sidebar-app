import React, { useState, useEffect } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import { NavLink } from 'react-router-dom'

const ContactList = () => {
  const [contacts, setContacts] = useState([])
  // const [rows, setRow] = useState([]);

  useEffect(() => {
    loadContactsFromServer()
  }, [])

  const loadContactsFromServer = async () => {
    const response = await fetch('http://localhost:3000/contacts')
    const resData = await response.json()
    console.log(resData)
    setContacts(resData)
  }

  const deleteDataHandler = (index) => {
    const dataRow = [...contacts];
    dataRow.splice(index, 1);
    setContacts(dataRow);
    localStorage.removeItem("id")
  }

  return (
    <>
      <CTable style={{margin: '30px 0px 0px 0px'}}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Email</CTableHeaderCell>
            <CTableHeaderCell scope="col">Phone</CTableHeaderCell>
            <CTableHeaderCell scope="col">Message</CTableHeaderCell>
            <CTableHeaderCell scope="col">Updaye</CTableHeaderCell>
            <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {contacts.map((contact, index) => {
            return (
              <CTableRow key={contact.id}>
                <CTableHeaderCell scope="row">{contact.id}</CTableHeaderCell>
                <CTableDataCell>{contact.name}</CTableDataCell>
                <CTableDataCell>{contact.email}</CTableDataCell>
                <CTableDataCell>{contact.phone}</CTableDataCell>
                <CTableDataCell>{contact.message}</CTableDataCell>
                <CTableDataCell>
                  <NavLink to={`/contacts/edit/` + contact.id}>Update</NavLink>
                </CTableDataCell>
                <CTableDataCell>
                  <NavLink to={`/contacts/delete/` + contact.id} onClick={() => deleteDataHandler(index)}>Delete</NavLink>
                </CTableDataCell>
              </CTableRow>
            )
          })}
        </CTableBody>
      </CTable>
    </>
  )
}

export default ContactList
