import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavbarAdmin } from '../components/NavbarAdmin';
import Sidebar from "../components/Sidebar";

class Report extends React.Component {
    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavbarAdmin />
                        <div className="container-fluid">
                            <div className="p-2">
                                <h2>Laporan</h2>
                                <hr></hr>
                                <div class="row">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report;




