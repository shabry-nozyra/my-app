import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { NavbarAdmin } from '../components/NavbarAdmin';
import Sidebar from "../components/Sidebar";

class InputSuara extends React.Component {
    render() {
        return (
                   <div className="container-fluid">
                        <div className="p-2">
                            <h2>Input Suara</h2>
                            <hr></hr>
                            <div class="row">
                                <div className="col-12">
                                    <form action="" method="post">
                                        <div class="form-group row">
                                            <label for="menu" class="col-sm-2 col-form-label">Kecamatan</label>
                                            <div class="col-sm-6">
                                                <select name="kecamatan" id="kecamatan" class="form-control fs13">
                                                    <option value="">- Pilih Kecamatan -</option>
                                                    <option value="koto parik gadang diateh">koto parik gadang diateh</option><option value="pauh duo">pauh duo</option><option value="sangir">sangir</option><option value="sangir jujuan">sangir jujuan</option><option value="sangir balai janggo">sangir balai janggo</option><option value="sangir batang hari">sangir batang hari</option><option value="sungai pagu">sungai pagu</option>                                    </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="menu" class="col-sm-2 col-form-label">Nagari</label>
                                            <div class="col-sm-6">
                                                <select name="nagari" id="nagari" class="form-control fs13">
                                                    <option value="all">- Pilih Nagari -</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="menu" class="col-sm-2 col-form-label">No TPS</label>
                                            <div class="col-sm-6">
                                                <select name="no_tps" id="no_tps" class="form-control fs13">
                                                    <option value="">- Pilih No TPS -</option>
                                                </select>
                                            </div>
                                        </div>


                                        <div class="form-group row text-right">
                                            <label for="inputpermalink" class="col-sm-2 col-form-label"></label>
                                            <div class="col-sm-6">
                                                <button type="submit" class="btn btn-sm btn-primary mr-2" name="pilihtps"><i class="fa fa-fw fa-sm fa-save"></i> Pilih TPS</button>
                                                <a class="btn btn-sm btn-danger text-white mr-2" href=""><i class="fa fa-fw fa-reply"></i> Batal</a>
                                                <a class="btn btn-sm btn-warning mr-2" href=""><i class="fa fa-fw fa-undo"></i> Reset</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <br />
                            <hr />
                            <div class="card mt-3 border-success col-md-8 p-0">
                                <div class="card-header px-2 btn-primary ">
                                    <h5><small class="text-white">Input Suara Pemilihan Bupati</small></h5>
                                </div>
                                <form action="https://rancak.nozyra.xyz/inputsuara" enctype="multipart/form-data" method="post" accept-charset="utf-8">
                                    <input type="hidden" name="id_tps" value=" 383"></input>
                                    <div class="card-body px-2">
                                        <div class="row">
                                            <div class="col-12">
                                                <p class="mb-0"> Pasangan Calon</p>
                                            </div>
                                        </div>
                                        <div class="row no-gutters">
                                            <div class="col-12">
                                                <p class="mb-2">Jumlah Suara Pasangan</p>
                                            </div>

                                            <div class="col-4">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">1</div>
                                                    </div>
                                                    <input type="text" class="form-control" id="suarapaslon1" placeholder=". . ." name="suarapaslon1">
                                                    </input>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">2</div>
                                                    </div>
                                                    <input type="text" class="form-control" id="suarapaslon2" placeholder=". . ." name="suarapaslon2"></input>
                                                </div>
                                            </div>
                                            <div class="col-4">
                                                <div class="input-group mb-2">
                                                    <div class="input-group-prepend">
                                                        <div class="input-group-text">3</div>
                                                    </div>
                                                    <input type="text" class="form-control" id="suarapaslon3" placeholder=". . ." name="suarapaslon3"></input>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="row">
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="jpl">Jumlah Pemilih Tetap</label>
                                                    <input type="text" class="form-control" id="jpl" value="198" name="jpl">
                                                    </input>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="form-group">
                                                    <label for="tidaksah">Jumlah Suara Tidak Sah</label>
                                                    <input type="text" class="form-control" id="tidaksah" placeholder="" name="tidaksah">
                                                    </input>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <p class="mb-1">Foto Form c1</p>
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="validatedCustomFile" name="c1bupati"></input>
                                                    <label class="custom-file-label" for="validatedCustomFile">Pilih Gambar...</label>
                                                    <div class="invalid-feedback">Form C1</div>
                                                </div>
                                            </div>
                                            <div class="col-12 p-2">
                                                <button class="btn btn-block btn-sm btn-primary" type="submit" id="kirimhitung">Kirim</button>
                                            </div>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                     </div>
        )
    }
}

export default InputSuara;




