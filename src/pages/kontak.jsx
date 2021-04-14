import React from 'react'
import { Container } from 'reactstrap';
import Footer from '../components/footer';
import NavbarComponent from '../components/NavbarComponent';
import '../index.css';

const Kontak = () => {
    return (
       
        <div>
             <NavbarComponent />
            <Container fluid className="mt-3 px-5">
                <div className="row">
                    <div className="col-12 px-3 pt-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/beranda" className="text-danger">Beranda</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Kontak</li>
                            </ol>
                        </nav>
                        <h3 className="text-success juduljudul text-danger">Kontak</h3>
                        <p className="small text-muted"><i>halaman kontak</i></p>

                        <div className="jumbotron-fluid">
                            <div className="card">
                                <div className="card-body p-3">
                                    <div className="row">
                                        <div className="col-lg-6 col-12">
                                            <div id="googleMap" className="d-flex justify-content-center">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.4886973332723!2d106.821435150098!3d-6.199073395490261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f41f2b24b18b%3A0xb5cb3eba60efb71e!2sThe%20City%20Tower!5e0!3m2!1sen!2sid!4v1594080040137!5m2!1sen!2sid" width="100%" height="380" frameborder="0" allowfullscreen="" title="maps"></iframe>
                                            </div>
                                            <div className="pt-2">
                                                PT. NOZYRA Global Solusindo<br />
                                    Level 12-1N The City Tower <br />
                                    Jl. MH Thamrin No. 81<br />
                                    Jakarta 10310<br />
                                    Indonesia
                                </div>
                                        </div>
                                        <div className="col-lg-6 col-12 message-us pt-3 pt-lg-0 pt-md-0">
                                            <div>
                                                <br />
                                            </div>
                                            <form method="post" role="form" className="form-validate" action="">
                                                <input type="text" name="ishuman" className="d-none" />
                                                <div className="form-group">
                                                    <input type="text" name="name" id="name" className="form-control" placeholder="Masukkan nama anda" required="" value="" />
                                                    <small className="text-danger"></small>
                                                </div>
                                                <div className="form-group">
                                                    <input type="number" id="phone" name="phone" className="form-control" placeholder="Masukkan nomor handphone anda" value="" required="" />
                                                    <small><i>* contoh :</i> 085312345678</small>
                                                    <small className="text-danger"></small>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" name="email" id="email" className="form-control" placeholder="Masukkan email anda" required="" value="" />
                                                    <small className="text-danger"></small>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" name="perihal" id="perihal" className="form-control" placeholder="masukkan perihal masalah" value="" />
                                                    <small className="text-danger"></small>
                                                </div>
                                                <div className="form-group">
                                                    <textarea className="form-control" id="message" rows="5" placeholder="silahkan deskripsikan detail masalah anda atau maksud anda menghubungi kami" name="message"></textarea>
                                                    <small className="text-danger"></small>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit" className="btn btn-primary">Kirim</button>
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
        </div>
    );
}

export default Kontak;