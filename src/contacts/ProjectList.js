import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CButton
} from "@coreui/react";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    loadProjectsFromServer();
  }, []);

  const loadProjectsFromServer = async () => {
    const response = await fetch("http://localhost:3000/projects");
    const resData = await response.json();
    console.log(resData);
    setProjects(resData);
  };

  const deleteDataHandler = async(index) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch("http://localhost:3000/projects/delete/" + id,requestOptions);
    const resData = await response.json();
    console.log(resData, "delete");

    const dataRow = [...projects];
    dataRow.splice(index, 1);
    setProjects(dataRow);
  };

  return (
    <>
    <h2 style={{ margin: "30px 0px 0px 0px" }}>Project LIst</h2>
   <NavLink to={`/Projects/add`}>  <CButton style={{ margin: "0px 20px 0px 0px", float: 'right'}}>Add Project</CButton></NavLink>
      <CTable style={{ margin: "60px 0px 0px 0px" }}>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Title</CTableHeaderCell>
            <CTableHeaderCell scope="col">Url</CTableHeaderCell>
            <CTableHeaderCell scope="col">Detail</CTableHeaderCell>
            <CTableHeaderCell scope="col">Update</CTableHeaderCell>
            <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {projects.map((project, index) => {
            return (
              <CTableRow key={project.id}>
                <CTableHeaderCell scope="row">{project.id}</CTableHeaderCell>
                <CTableDataCell>{project.title}</CTableDataCell>
                <CTableDataCell>{project.url}</CTableDataCell>
                <CTableDataCell>{project.detail}</CTableDataCell>
                <CTableDataCell>
                  <NavLink to={`/projects/edit/` + project.id}>Update</NavLink>
                </CTableDataCell>
                <CTableDataCell>
                  <NavLink to={`/projects/delete/` + project.id} onClick={() => deleteDataHandler(index)}>Delete</NavLink>
                </CTableDataCell>
              </CTableRow>
            );
          })}
        </CTableBody>
      </CTable>
    </>
  );
};

export default ProjectList;
