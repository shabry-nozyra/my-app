import React from 'react';
function Home() {

    return (
        <div className="">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">HALAMAN DEPAN</h1>
            </div>
            <div className="row pt-0">
                <div className="col-12 header-bar">
                    {/* <div className="judul-halaman-content">Test beranda</div> */}
                    <div className="keterangan-halaman-content pt-1">Selamat datang di Aplikasi NOZYRA Rancak Pantau Suara Pilkada</div>
                </div>
            </div>
            <div className="row pt-1">
                <div className="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
                    <div className="card task">
                        <div className="card-body text-left mini-stat-img">
                            <div className="icon-task float-right">
                                <i className="fa fa-fw fa-lg fa-building"></i>
                            </div>
                            <h5 className="card-title mb-3">TPS</h5>
                            <h4 className="card-title nomor fs24">461</h4>

                            <a href="/adminpant4u/tps" className="btn btn-outline-light btn-sm">Lihat Detail</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
                    <div className="card task">
                        <div className="card-body text-left">
                            <div className="icon-task float-right">
                                <i className="fa fa-fw fa-lg fa-address-card"></i>
                            </div>
                            <h5 className="card-title mb-3">Petugas TPS</h5>
                            <h4 className="card-title nomor fs24">0</h4>
                            <a href="/adminpant4u/petugastps" className="btn btn-outline-light btn-sm">Lihat Detail</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
                    <div className="card task">
                        <div className="card-body text-left">
                            <div className="icon-task float-right">
                                <i className="fa fa-fw fa-lg fa-address-card"></i>
                            </div>
                            <h5 className="card-title mb-3">Pasangan Bupati</h5>
                            <h4 className="card-title nomor fs24">3</h4>
                            <a href="/adminpant4u/paslon" className="btn btn-outline-light btn-sm">Lihat Detail</a>

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
                    <div className="card task">
                        <div className="card-body text-left">
                            <div className="icon-task float-right">
                                <i className="fa fa-fw fa-lg fa-id-card"></i>
                            </div>
                            <h5 className="card-title mb-3">Petugas Kecamatan</h5>
                            <h4 className="card-title nomor fs24">0</h4>
                            <a href="/adminpant4u/petugaskec" className="btn btn-outline-light btn-sm">Lihat Detail</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
                    <div className="card task">
                        <div className="card-body text-left">
                            <div className="icon-task float-right">
                                <i className="fa fa-fw fa-lg fa-address-book"></i>
                            </div>
                            <h5 className="card-title mb-3">Petugas Kabupaten</h5>
                            <h4 className="card-title nomor fs24">0</h4>
                            <a href="/adminpant4u/petugaskab" className="btn btn-outline-light btn-sm">Lihat Detail</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
                    <div className="card task">
                        <div className="card-body text-left">
                            <div className="icon-task float-right">
                                <i className="fa fa-fw fa-lg fa-file"></i>
                            </div>
                            <h5 className="card-title mb-3">Laporan</h5>
                            <h4 className="card-title nomor fs24">0</h4>
                            <a href="/adminpant4u/report" className="btn btn-outline-light btn-sm">Lihat Detail</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}


export default Home;