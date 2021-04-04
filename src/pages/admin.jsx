import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Home from '../admin/Home';
import Paslon from '../admin/Paslon';
import { NavbarAdmin } from '../components/NavbarAdmin';
import Sidebar from "../components/Sidebar";

const Admin = () => {
    return (
        <Router>
        <div id="wrapper">
       <Sidebar />
       <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
              <NavbarAdmin />
              <div className="container-fluid">
                  <Home />
              </div>
          </div>
      </div>
      </div>
  </Router>
    );
}

export default Admin;