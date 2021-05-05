import React from 'react'
import DropdownComponent from '../DropdownComponent';
import { Table } from 'reactstrap';

const LokasiComponent = () => {
        return (
                <div className="p-2">
                        <h2>Lokasi</h2>
                        <hr></hr>
                        <div className="text-right p-3">
                            <a className="btn btn-primary" href="/adminpant4u/lokasi/addlokasi">Tambah Lokasi Baru</a>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card p-3 shadow-sign border-0 mt-3">
                                    <DropdownComponent />
                                </div>
                                <div>
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
        )
}

export default LokasiComponent;
