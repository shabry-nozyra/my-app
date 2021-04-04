import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardImg } from 'reactstrap'
// import { Link } from "react-router-dom"
import brandlogo from "../image/logo-rancak-white.png"
import paslon1 from "../image/paslon1.jpg"
import '../index.css';
import NavbarComponent from "../components/NavbarComponent";
import Footer from '../components/footer'

const Kecurangan = () => {
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
                                <li class="breadcrumb-item"><a href="beranda.html" class="text-danger">Beranda</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Kecurangan</li>
                            </ol>
                        </nav>
                        <h3 class="text-success juduljudul text-danger">Informasi Kecurangan</h3>
                        <p class="small text-muted"><i>halaman tentang informasi kecurangan</i></p>
                        <div class="alert alert-success" role="alert">
                            Tidak Ada Laporan Kecurangan
                        </div>
                    </div>
                    <div class="col-md-3  p-0">
                        <div class="card">
                            <div class="card-header bg-danger pl-3">
                                <h6 class="text-white">Jumlah Kecurangan perkecamatan</h6>
                            </div>
                            <div class="card-body p-2">
                                <ul>
                                    <li>Tidak Ada Kecurangan</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

          <Footer />
        </div >
    );
}

export default Kecurangan;