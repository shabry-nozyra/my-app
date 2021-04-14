import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { NavbarAdmin } from '../components/NavbarAdmin';
import Sidebar from "../components/Sidebar";
import swal from "sweetalert";
import { postPaslonCreate } from '../Actions/PaslonActions';
import PaslonFormComponent from '../components/PaslonFormComponent';

const mapStateToProps = (state) => {
  return {
      getResponDataPaslon: state.paslons.getResponDataPaslon,
      errorResponDatapaslon: state.paslons.errorResponDataPaslon
  };
};

class TambahPaslon extends React.Component { 
  handleSubmit(data) {
    this.props.dispatch(postPaslonCreate(data));
  }
  render() {
    if (this.props.getResponDataPaslon || this.props.errorResponDataPaslon) {
      if(this.props.errorResponDataPaslon)
      {
        swal(
            "Failed!",
            this.props.errorResponDataPaslon,
            "error"
          );
      }else {
        swal( 
          "Success",
           "Data Paslon Berhasil Ditambahkan",
           "success"
          );
          window.location.href = "/paslon";
      }
      
    }
    return (
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavbarAdmin />
            <div className="container-fluid">
              <div className="p-2">
                <h2>Tambah Pasangan Calon Bupati</h2>
                <hr></hr>
                <div class="row">
                  <div className="col-12">
                      <PaslonFormComponent  onSubmit={(data) => this.handleSubmit(data)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, null)(TambahPaslon);





