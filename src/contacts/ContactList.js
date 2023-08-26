import React, { useState, useEffect } from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const ContactList = () => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    loadContactsFromServer()
  }, [])

  const loadContactsFromServer = async () => {
    const response = await fetch('http://localhost:8000/contacts')
    const resData = await response.json()
    console.log(resData)
    setContacts(resData)
  }

  const editDataHandler = () => {}
  const deleteDataHandler = () => {}

  return (
    <>
      <CTable>
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
          {contacts.map((contact) => {
            return (
              <CTableRow key={contact.id}>
                <CTableHeaderCell scope="row">{contact.id}</CTableHeaderCell>
                <CTableDataCell>{contact.name}</CTableDataCell>
                <CTableDataCell>{contact.email}</CTableDataCell>
                <CTableDataCell>{contact.phone}</CTableDataCell>
                <CTableDataCell>{contact.message}</CTableDataCell>
                <CTableDataCell>
                  <button onClick={editDataHandler}>Update</button>
                </CTableDataCell>
                <CTableDataCell>
                  <button onClick={deleteDataHandler}>Delete</button>
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
