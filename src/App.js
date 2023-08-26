import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ContactList from "./contacts/ContactList";
import AddContact from "./contacts/AddContact";

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
            <Route exact path="/add" element={<AddContact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
