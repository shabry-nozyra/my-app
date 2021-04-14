import React from 'react';
import { Container } from 'reactstrap';
import Footer from '../components/footer';
import NavbarComponent from '../components/NavbarComponent';
import '../index.css';

const jumlahjpl = 0;
const jumlahnagari = 0;
const jumlahtps = 0;
const PerolehanSuara = () => {
    return (
        <div>
            <NavbarComponent />
            <Container fluid className="mt-3 px-5">
                <div className="row">
                    <div className="col-md-9 px-3 pt-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/beranda" className="text-danger">Beranda</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Data TPS perkecamatan</li>
                            </ol>
                        </nav>
                        <h3 className="text-danger juduljudul">Data Suara Pemilihan Bupati di Setiap TPS / Kecamatan</h3>
                        <p className="small text-muted"><i>Informasi suara pemilihan Calon Bupati pada setiap TPS dikecamatan</i></p>
                        <div className="row">
                            <div className="col-md-4 p-2">
                                <div className="card">
                                    <div className="card-header bg-danger">
                                        <h6 className="mb-0 text-white">{" Nama Nagari"}</h6>
                                    </div>
                                    <div className="card-body p-2">
                                        <div className="row">
                                            <div className="col-8">
                                                Jumlah Nagari
                                        </div>
                                            <div className="col-4">{jumlahnagari}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                Jumlah TPS
                                        </div>
                                            <div className="col-4">{jumlahtps}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                Jumlah Pemilih Tetap
                                        </div>
                                            <div className="col-4">{jumlahjpl}</div>
                                        </div>
                                        <a href="/detail/nama_kecamatan" className="btn btn-outline-danger btn-sm  float-right">Detail</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3  p-0">
                        <div className="card">
                            <div className="card-header bg-danger pl-3">
                                <h6 className="text-white">Kecamatan</h6>
                            </div>
                            <div className="card-body p-2">
                                <ul className="list-group">
                                    <a href="/detailsuara" className="text-dark">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                            belum ada suara
                                    {/* <span className="badge badge-danger badge-pill"> 1 TPS</span> */}
                                        </li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default PerolehanSuara;