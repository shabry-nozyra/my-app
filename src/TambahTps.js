import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

class TambahTps extends React.Component {
    render() {
        return (
            <div className="p-2">
                <h2>Tambah TPS</h2>
                <hr></hr>
                <div class="row">
                   <div className="col-12">
                   <form action="" method="post">
                            <div class="form-group row">
                                <label for="nama_paket" class="col-sm-2 col-form-label">No TPS</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control fs13" id="no_tps" name="no_tps" placeholder="No TPS">
                                        </input>
                                    <small class="text-danger"></small>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="lokasi" class="col-sm-2 col-form-label">Lokasi TPS</label>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control fs13" id="lokasi" name="lokasi" placeholder="Lokasi TPS">
                                        </input>
                                    <small>*misalnya : Gedung Pancasila atau SDN 1 Nusantara</small>
                                    <small class="text-danger"></small>
                                </div>

                            </div>
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
                                        <option value="">- Pilih Nagari -</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="harga" class="col-sm-2 col-form-label">Jorong</label>
                                <div class="col-sm-6">
                                    <select name="jorong" id="jorong" class="form-control fs13">
                                        <option value="">- Pilih Jorong -</option>
                                    </select>
                                </div>      
                            </div>
                            <div class="form-group row">
                                <label for="harga" class="col-sm-2 col-form-label">Jumlah pemilih tetap</label>
                                <div class="col-sm-6">
                                    <input type="number" class="form-control fs13" id="harga" name="jpl" placeholder="Jumlah pemilih tetap"></input>
                                    <small class="text-danger"></small>
                                </div>
                            </div>

                            <hr />

                            <div class="form-group row text-right">
                                <label for="inputpermalink" class="col-sm-2 col-form-label"></label>
                                <div class="col-sm-6">
                                    <button type="submit" class="btn btn-sm btn-primary mr-2" name="simpantps"><i class="fa fa-fw fa-sm fa-save"></i> Simpan</button>
                                    <a class="btn btn-sm mr-2 btn-danger text-white" href=""><i class="fa fa-fw fa-reply"></i> Batal</a>
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

export default TambahTps;




