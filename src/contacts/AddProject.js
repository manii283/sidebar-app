import React, { useState } from 'react'
import { CCol, CFormInput, CForm, CButton } from '@coreui/react'

const AddProject = () => {
  const [title, setTitle] = useState({})
  const [url, setUrl] = useState({})
  const [detail, setDetail] = useState({})

  const uploadProjectDetails = async (event) => {
    event.preventDefault()

    const requestOptions = {
      method: 'POST',
      // headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: title, url: url, detail: detail}),
    }

    const response = await fetch('http://localhost:3000/projects/add',requestOptions)
    const resData = await response.json()
    console.log(resData)
    // setContacts(resData)
  }
  return (
    <>
      <CForm className="row g-3" method="post" onSubmit={uploadProjectDetails} style={{margin: '20px 0px 0px 20px'}}>
        <CCol md={12} >
          <CFormInput
            type="text"
            id="title"
            name="title"
            label="Title"
            className='formlabel'
            onChange={(event) => {
              setTitle(event.target.value)
            }}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="url"
            name="url"
            label="Url"
            onChange={(e) => setUrl(e.target.value)}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="detail"
            name="detail"
            label="Details"
            onChange={(e) => setDetail(e.target.value)}
          />
        </CCol>
        <CCol md={12}>
          <CButton type="submit" name="submit"> Submit </CButton>
        </CCol>
      </CForm>
    </>
  )
}

export default AddProject
