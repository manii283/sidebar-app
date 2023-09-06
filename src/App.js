import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ContactList from "./contacts/ContactList";
import AddContact from "./contacts/AddContact";
import EditContact from "./contacts/EditContact";
import AddProject from "./contacts/AddProject";
import ProjectList from "./contacts/ProjectList";
import EditProject from "./contacts/EditProject";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <Routes>
            <Route exact path="/contacts" element={<ContactList />} />
            <Route exact path="contacts/add" element={<AddContact />} />
            <Route exact path="contacts/edit/:id" element={<EditContact />} />
            <Route exact path="contacts/delete/:id" element={<ContactList />} />
             {/* Project */}
            <Route exact path="/projects" element={<ProjectList/>} />
            <Route exact path="projects/add" element={<AddProject />} />
            <Route exact path="projects/edit/:id" element={<EditProject />} />
            <Route exact path="projects/delete/:id" element={<ProjectList/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
