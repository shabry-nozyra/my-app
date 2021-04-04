import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardImg } from 'reactstrap'
// import { Link } from "react-router-dom"
import brandlogo from "../image/logo-rancak-white.png"
import paslon1 from "../image/paslon1.jpg"
import '../index.css';
import NavbarComponent from "../components/NavbarComponent";
import Footer from '../components/footer'

const Tentang = () => {
    return (
        <div className="">
            {/* Navbar */}
            <NavbarComponent  />
            {/* End Navbar */}
            <Container fluid className="mt-3 px-5">
            <div class="row">
        <div class="col-md-9 px-3 pt-0">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="beranda.html" class="text-danger">Beranda</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Tentang</li>
                </ol>
            </nav>
            <h3 class="text-success juduljudul text-danger">Tentang</h3>
            <p class="small text-muted"><i>halaman tentang informasi NOZYRA RANCAK PANTAU PILKADA</i></p>
            <div class="card mt-4">
                <div class="card-body">
                    <h3>Tentang Aplikasi NOZYRA RANCAK</h3>
<br />
<p>Aplikasi NOZYRA RANCAK dibuat untuk mengawal suara pasangan Calon Bupati Erwin Ali dan Calon Wakil Bupati Marwen Efendi mulai dari TPS sampai dengan validasi di tingkat final di KPU Kabupaten. Semua data yang terdapat pada aplikasi ini merupakan data valid yang diinputkan oleh saksi disetiap TPS.</p>                </div>
            </div>
        </div>
    </div>
            </Container>

            <Footer />    
        </div >
    );
}

export default Tentang;