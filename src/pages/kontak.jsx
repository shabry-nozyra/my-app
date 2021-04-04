import React from 'react'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardImg } from 'reactstrap'
// import { Link } from "react-router-dom"
import brandlogo from "../image/logo-rancak-white.png"
import paslon1 from "../image/paslon1.jpg"
import '../index.css';
import NavbarComponent from "../components/NavbarComponent";
import Footer from '../components/footer'

const Kontak = () => {
    return (
        <div className="">
            {/* Navbar */}
                <NavbarComponent />
            {/* End Navbar */}
            <Container fluid className="mt-3 px-5">
                <div class="row">
                    <div class="col-12 px-3 pt-0">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="beranda.html" class="text-danger">Beranda</a></li>
                                <li class="breadcrumb-item active" aria-current="page">Kontak</li>
                            </ol>
                        </nav>
                        <h3 class="text-success juduljudul text-danger">Kontak</h3>
                        <p class="small text-muted"><i>halaman kontak</i></p>

                        <div class="jumbotron-fluid">
                            <div class="card">
                                <div class="card-body p-3">
                                    <div class="row">
                                        <div class="col-lg-6 col-12">
                                            <div id="googleMap" class="d-flex justify-content-center">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4886973332723!2d106.821435150098!3d-6.199073395490261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f41f2b24b18b%3A0xb5cb3eba60efb71e!2sThe%20City%20Tower!5e0!3m2!1sen!2sid!4v1594080040137!5m2!1sen!2sid" width="100%" height="380" frameborder="0" allowfullscreen=""></iframe>
                                            </div>
                                            <div class="pt-2">
                                                PT. NOZYRA Global Solusindo<br />
                                    Level 12-1N The City Tower <br />
                                    Jl. MH Thamrin No. 81<br />
                                    Jakarta 10310<br />
                                    Indonesia
                                </div>
                                        </div>
                                        <div class="col-lg-6 col-12 message-us pt-3 pt-lg-0 pt-md-0">
                                            <div>
                                                <br />
                                            </div>
                                            <form method="post" role="form" class="form-validate" action="">
                                                <input type="text" name="ishuman" className="d-none" />
                                                <div class="form-group">
                                                    <input type="text" name="name" id="name" class="form-control" placeholder="Masukkan nama anda" required="" value="" />
                                                    <small class="text-danger"></small>
                                                </div>
                                                <div class="form-group">
                                                    <input type="number" id="phone" name="phone" class="form-control" placeholder="Masukkan nomor handphone anda" value="" required="" />
                                                    <small><i>* contoh :</i> 085312345678</small>
                                                    <small class="text-danger"></small>
                                                </div>
                                                <div class="form-group">
                                                    <input type="email" name="email" id="email" class="form-control" placeholder="Masukkan email anda" required="" value="" />
                                                    <small class="text-danger"></small>
                                                </div>
                                                <div class="form-group">
                                                    <input type="text" name="perihal" id="perihal" class="form-control" placeholder="masukkan perihal masalah" value="" />
                                                    <small class="text-danger"></small>
                                                </div>
                                                <div class="form-group">
                                                    <textarea class="form-control" id="message" rows="5" placeholder="silahkan deskripsikan detail masalah anda atau maksud anda menghubungi kami" name="message"></textarea>
                                                    <small class="text-danger"></small>
                                                </div>
                                                <div class="form-group">
                                                    <button type="submit" class="btn btn-primary">Kirim</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Footer />
             </div >
    );
}

export default Kontak;