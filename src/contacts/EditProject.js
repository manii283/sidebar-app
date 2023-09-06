import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CCol, CFormInput, CForm, CButton } from "@coreui/react";

const EditProject = () => {
  const [title, setTitle] = useState({});
  const [url, setUrl] = useState({});
  const [detail, setDetail] = useState({});


  const [project, setProject] = useState("");
  const { id } = useParams();

  useEffect(() => {
    loadProjecttDetail();
  }, []);

  const loadProjecttDetail = async () => {
    const response = await fetch("http://localhost:3000/projects/view/" + id);
    const resData = await response.json();
    console.log(resData);
    setProject(resData);
    setTitle(resData.title);
    setUrl(resData.url);
    setDetail(resData.detail);
  };

  const uploadProjectDetails = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        url: url,
        detail: detail,
        id: id,
      }),
    };

    const response = await fetch(
      "http://localhost:3000/projects/edit",
      requestOptions
    );
    const resData = await response.json();
    console.log(resData);
    // setContacts(resData)
  };
  return (
    <>
      <CForm
        className="row g-3"
        method="post"
        onSubmit={uploadProjectDetails}
        style={{ margin: "20px 0px 0px 20px" }}
      >
        <CCol md={12}>
          <CFormInput
            type="text"
            id="title"
            name="title"
            label="Title"
            className="formlabel"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            value={title}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="url"
            name="url"
            label="URl"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
          />
        </CCol>
        <CCol md={6}>
          <CFormInput
            type="text"
            id="detail"
            name="detail"
            label="Detail"
            onChange={(e) => setDetail(e.target.value)}
            value={detail}
          />
        </CCol>
        <CCol md={12}>
          {/* <NavLink to="/contacts"> */}
            <CButton type="submit" name="submit">
              Update
            </CButton>
          {/* </NavLink> */}
        </CCol>
      </CForm>
    </>
  );
};

export default EditProject;
