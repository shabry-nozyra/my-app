import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavbarAdmin } from '../components/NavbarAdmin';
import Sidebar from "../components/Sidebar";
import { Table } from 'reactstrap';

class Lokasi extends React.Component {
  render() {
    return (
      <div className="p-2">
        <h2>Pengaturan Lokasi</h2>
        <hr></hr>
        <div class="row">
          <div class="col-12">
            <div class="card p-3 shadow-sign border-0 mt-3">
              <div class="row pt-2">
                <div class="col-12">
                  <br />
                </div>

                <div class="col-12 pt-3">
                  <Button className="btn btn-dark m-2">Jorong</Button>
                  <Button className="btn btn-dark m-2">Nagari</Button>
                  <Button className="btn btn-dark m-2">Kecamatan</Button>
                  <div className="tabel-besar">
                    <Button className="btn btn-dark m-2 float-right btn-sm">Tambahkan Data Jorong Baru</Button>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama Jorong</th>
                          <th>Nagari</th>
                          <th>Kecamatan</th>
                          <th>Aksi</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
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

export default Lokasi;




