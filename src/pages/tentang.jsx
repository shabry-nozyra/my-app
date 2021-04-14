import React from 'react'
import '../index.css';
import { Container } from 'reactstrap';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/footer';

const Tentang = () => {
    return (
        <div>
            <NavbarComponent />
        <Container fluid className="mt-3 px-5">
            <div className="row">
                <div className="col-md-9 px-3 pt-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="beranda.html" className="text-danger">Beranda</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Tentang</li>
                        </ol>
                    </nav>
                    <h3 className="text-success juduljudul text-danger">Tentang</h3>
                    <p className="small text-muted"><i>halaman tentang informasi NOZYRA RANCAK PANTAU PILKADA</i></p>
                    <div className="card mt-4">
                        <div className="card-body">
                            <h3>Tentang Aplikasi NOZYRA RANCAK</h3>
                            <br />
                            <p>Aplikasi NOZYRA RANCAK dibuat untuk mengawal suara pasangan Calon Bupati Erwin Ali dan Calon Wakil Bupati Marwen Efendi mulai dari TPS sampai dengan validasi di tingkat final di KPU Kabupaten. Semua data yang terdapat pada aplikasi ini merupakan data valid yang diinputkan oleh saksi disetiap TPS.</p>                </div>
                    </div>
                </div>
            </div>
        </Container>
            <Footer />
        </div>
        );
}

export default Tentang;