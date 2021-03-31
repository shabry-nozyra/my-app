import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

class EditPaslon extends React.Component {
    render() {
        return (
            <div className="p-2">
                <h2>Edit Pasangan Calon Bupati</h2>
                <hr></hr>
                <div class="row">
                    <div className="col-12">
                        <form action="" enctype="multipart/form-data" method="post" accept-charset="utf-8">


                            <input type="hidden" name="id" value="1"></input>
                            <div class="form-group row">
                                <div class="col-sm-4">
                                    <label for="">Calon Bupati</label>
                                    <input type="text" class="form-control fs13" value="Test" name="bupati">
                                    </input>
                                </div>
                                <div class="col-sm-4">
                                    <label for="">Calon Wakil Bupati</label>
                                    <input type="text" class="form-control fs13" value="Test" name="wakil">
                                    </input>
                                </div>
                            </div>
                            <div class="form-group pr-3">
                                <label for="inputAddress">Nomor Urut</label>
                                <input type="text" class="form-control col-sm-8 p-2 fs13" id="inputAddress" value="1" name="no_urut"></input>
                            </div>
                            <div class="form-group col-md-8 p-0 pr-3">
                                <label for="exampleFormControlFile1">Foto Pasangan Calon</label>
                                <div class="row mt-2">
                                    <div class="col-2 ">
                                        <img src="https://rancak.nozyra.xyz/assets/images/paslonbupati/5c10ded8c3632be7630ae6f45f868138.jpg" alt="" class="img-fluid">
                                        </img>
                                    </div>
                                    <div class="col p-2">
                                        <div class="custom-file">
                                            <input type="file" class="custom-file-input" id="validatedCustomFile" name="image"></input>

                                            <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                                            <div class="invalid-feedback">Example invalid custom file feedback</div>
                                        </div>
                                        <small>*kosongkan jika tidak ingin mengubah gambar</small><br />
                                        <small>**type foto jpg/png dan max file size 1 mb</small>
                                    </div>
                                </div>

                            </div>
                            <hr />

                            <div class="form-group row text-right">
                                <label for="inputpermalink" class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-6">
                                    <button type="submit" class="btn btn-sm btn-primary mr-2" name="simpanpaslon"><i class="fa fa-fw fa-sm fa-save"></i> Simpan</button>
                                    <a class="btn btn-sm btn-danger text-white mr-2" href=""><i class="fa fa-fw fa-reply"></i> Batal</a>
                                    <a class="btn btn-sm btn-warning mr-2" href=""><i class="fa fa-fw fa-undo"></i> Reset</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditPaslon;




