import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CCol, CFormInput, CForm, CButton } from "@coreui/react";

const EditContact = () => {
  // const [contact, setContact] = useState({})
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [phone, setPhone] = useState({});
  const [message, setMessage] = useState({});
  // const [id, setId] = useState();

  const [contact, setContact] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadContactDetail();
  }, []);

  const loadContactDetail = async () => {
    const response = await fetch("http://localhost:3000/contacts/view/" + id);
    const resData = await response.json();
    console.log(resData);
    setContact(resData);
    // setId(resData.id)
    setName(resData.name);
    setEmail(resData.email);
    setPhone(resData.phone);
    setMessage(resData.message);
  };

  const uploadContactDetails = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        message: message,
        id: id,
      }),
    };

    const response = await fetch("http://localhost:3000/contacts/edit",requestOptions);
    const resData = await response.json();
    console.log(resData);
    // setContacts(resData)
  };
  return (
    <>
      <CForm
        className="row g-3"
        method="post"
        onSubmit={uploadContactDetails}
        style={{ margin: "20px 0px 0px 20px" }}
      >
        <CCol md={12}>
          <CFormInput
            type="text"
            id="name"
            name="name"
            label="Name"
            className="formlabel"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="email"
            name="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="number"
            id="phone"
            name="phone"
            label="Phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </CCol>
        <CCol md={12}>
          <CFormInput
            type="text"
            id="message"
            name="message"
            label="Message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </CCol>
        <CCol md={12}>
          <CButton type="submit" name="submit">
            Update
          </CButton>
        </CCol>
      </CForm>
    </>
  );
};

export default EditContact;
