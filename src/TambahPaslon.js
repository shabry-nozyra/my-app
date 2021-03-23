import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

class TambahPaslon extends React.Component {
    constructor(){
        super();
        this.state={
          bupati: '',
          wakil: '',
          no_urut: '',
          foto: ''
        }
      }  
      onChange =(e) =>{
        this.setState({
          [e.target.id]:e.target.value
        })
      }
      onSubmit=()=>{
        let data ={
          bupati: this.state.bupati,
          wakil: this.state.wakil,
          no_urut: 9,
          foto: this.state.foto
        }
        axios.post('http://localhost:8080/paslon/add',data)
        .then((res)=>{
          console.log(res)
        }).catch((err)=>{
          console.log(err)
        })
      }
    render() {
        return (
            <div className="p-2">
                <h2>Tambah Pasangan Calon Bupati</h2>
                <hr></hr>
                <div class="row">
                   <div className="col-12">
                   <form action="https://rancak.nozyra.xyz/pasanganbupati/tambah" enctype="multipart/form-data" method="post" accept-charset="utf-8">
                        <div class="form-group row">
                            <div class="col-sm-4">
                                <label for="">Calon Bupati</label>
                                <input type="text" class="form-control fs13" placeholder="Nama Calon Bupati" name="bupati" id="bupati" onChange={this.onChange}>
                                    </input>
                                <small class="text-danger"></small>
                            </div>
                            <div class="col-sm-4">
                                <label for="">Calon Wakil Bupati</label>
                                <input type="text" class="form-control fs13" placeholder="Nama Calon Wakil Bupati" name="wakil" id="wakil"  onChange={this.onChange}>
                                </input>
                                <small class="text-danger"></small>
                            </div>
                        </div>
                        <div class="form-group pr-3">
                            <label for="inputAddress">Nomor Urut</label>
                            <input type="number" class="form-control col-sm-8 p-2 fs13" id="inputAddress" placeholder="No Urut" name="no_urut" id="no_urut" onChange={this.onChange}>
                                </input>
                            <small class="text-danger"></small>
                        </div>
                        <div class="form-group col-md-8 p-0 pr-3">
                            <label for="exampleFormControlFile1">Foto Pasangan Calon</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="validatedCustomFile" name="image" id="foto" onChange={this.onChange}>
                                    </input>
                                <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
                                <div class="invalid-feedback">Example invalid custom file feedback</div>
                                <small class="text-danger"></small>
                            </div>
                            <small>*type foto jpg/png dan max file size 1 mb</small>
                        </div>
                        <hr />

                        <div class="form-group row text-right">
                            <label for="inputpermalink" class="col-sm-2 col-form-label"></label>
                            <div class="col-sm-6">
                                <button type="button" class="btn btn-sm btn-primary m-2" name="simpanpaslon" onClick={this.onSubmit}><i class="fa fa-fw fa-sm fa-save"></i> Simpan</button>
                                <a class="btn btn-sm btn-danger text-white m-2" href=""><i class="fa fa-fw fa-reply"></i> Batal</a>
                                <a class="btn btn-sm btn-warning m-2" href=""><i class="fa fa-fw fa-undo"></i> Reset</a>
                            </div>
                        </div>
                        </form>
                   </div>
                </div>
            </div>
        )
    }
}

export default TambahPaslon;




