import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavbarAdmin } from '../../components/NavbarAdmin';
import Sidebar from "../../components/Sidebar";

class AddLokasi extends React.Component {
    render() {
        return (
            <div className="p-2">
                <h2>Add Lokasi</h2>
                <hr></hr>
                <div class="row">
                    <div className="col-12">
                        <form action="" method="post">
                            <div class="form-group row">
                                <label for="harga" class="col-sm-2 col-form-label">Jorong</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="jorong" name="jorong" />
                                        <small class="text-danger"></small>
                                </div>
                                </div>

                                <div class="form-group row">
                                    <label for="menu" class="col-sm-2 col-form-label">Nagari</label>
                                    <div class="col-sm-6">
                                        <input type="text" class="form-control" id="nagari" name="nagari" />
                                </div>
                                    </div>

                                    <div class="form-group row">
                                        <label for="menu" class="col-sm-2 col-form-label">Kecamatan</label>
                                        <div class="col-sm-6">
                                            <input type="text" class="form-control" id="kecamatan" name="kecamatan" />
                                </div>
                                        </div>
                                        <hr />

                                            <div class="form-group row text-right">
                                                <label for="inputpermalink" class="col-sm-2 col-form-label"></label>
                                                <div class="col-sm-6">
                                                    <button type="submit" class="btn btn-sm btn-primary mr-2" name="simpanjorong"><i class="fa fa-fw fa-sm fa-save"></i> Simpan</button>
                                                    <a class="btn btn-sm btn-danger text-white mr-2" href="/adminpant4u/lokasi"><i class="fa fa-fw fa-reply"></i> Batal</a>
                                                    <a class="btn btn-sm btn-warning mr-2" href="/adminpant4u/lokasi/addlokasi"><i class="fa fa-fw fa-undo"></i> Reset</a>
                                                </div>
                                            </div>
                        </form>
                                    </div>
                                </div>
                            </div>

        )
    }
}

export default AddLokasi;




