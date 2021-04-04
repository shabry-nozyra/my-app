import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardImg } from 'reactstrap'
// import { Link } from "react-router-dom"
import brandlogo from "../image/logo-rancak-white.png"
import paslon1 from "../image/paslon1.jpg"
import '../index.css';
import NavbarComponent from "../components/NavbarComponent";
import Footer from '../components/footer'

const PerolehanSuara = () => {
    return (
        <div className="">
            {/* Navbar */}
            <NavbarComponent />
          {/* End Navbar */}
            <Container fluid className="mt-3 px-5">
            <div class="row">
        <div class="col-md-9 px-3 pt-0">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="https://rancak.nozyra.xyz/web/" class="text-danger">Beranda</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data TPS perkecamatan</li>
                </ol>
            </nav>
            <h3 class="text-danger juduljudul">Data Suara Pemilihan Bupati di Setiap TPS / Kecamatan</h3>
            <p class="small text-muted"><i>Informasi suara pemilihan Calon Bupati pada setiap TPS dikecamatan</i></p>
            <div class="row">
                <div className="col-12">
                <div class="alert alert-success" role="alert">
                          Belum ada suara
                        </div>
                </div>
          
                        {/* <div class="col-md-4 p-2">
                            <div class="card">
                                <div class="card-header bg-danger">
                                    <h6 class="mb-0 text-white">Koto Parik Gadang Diateh</h6>
                                </div>
                                <div class="card-body p-2">
                                    <div class="row">
                                        <div class="col-8">
                                            Jumlah Nagari
                                        </div>
                                        <div class="col-4">: 4</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-8">
                                            Jumlah TPS
                                        </div>
                                        <div class="col-4">: 1</div>
                                    </div>
                                    <div class="row">
                                        <div class="col-8">
                                            Jumlah Pemilih Tetap
                                        </div>
                                        <div class="col-4">: 813</div>
                                    </div>
                                    <a href="https://rancak.nozyra.xyz/tps/detail/koto parik gadang diateh" class="btn btn-outline-danger btn-sm  float-right">Detail</a>
                                </div>
                            </div>
                        </div>          */}
            </div>
        </div>
        <div class="col-md-3  p-0">
            <div class="card">
                <div class="card-header bg-danger pl-3">
                    <h6 class="text-white">Kecamatan</h6>
                </div>
                <div class="card-body p-2">
                    <ul class="list-group">
                            <a href="" class="text-dark">
                                <li class="list-group-item d-flex justify-content-between align-items-center">
                                 belum ada suara
                                    {/* <span class="badge badge-danger badge-pill"> 1 TPS</span> */}
                                </li>
                            </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
            </Container>
        {/* Footer */}
        <Footer />
        {/* End Footer */}
        </div >
    );
}

export default PerolehanSuara;