import React from 'react';
function Home() {
  
        return (
      <div>
        <div class="container-fluid p-0">
    <div class="row pt-0">
        <div class="col-12 header-bar">
            <div class="judul-halaman-content">Beranda</div>
            <div class="keterangan-halaman-content pt-1">Selamat datang di Aplikasi NOZYRA Rancak Pantau Suara Pilkada</div>
        </div>
    </div>


    <div class="row pt-1">
        <div class="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
            <div class="card task">
                <div class="card-body text-left mini-stat-img">
                    <div class="icon-task float-right">
                        <i class="fa fa-fw fa-lg fa-building"></i>
                    </div>
                    <h5 class="card-title mb-3">TPS</h5>
                    <h4 class="card-title nomor fs24">@TPS</h4>

                    <a href="" class="btn btn-outline-light btn-sm">Lihat Detail</a>
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
            <div class="card task">
                <div class="card-body text-left">
                    <div class="icon-task float-right">
                        <i class="fa fa-fw fa-lg fa-address-card"></i>
                    </div>
                    <h5 class="card-title mb-3">Petugas TPS</h5>
                    <h4 class="card-title nomor fs24">@TPS</h4>
                    <a href="" class="btn btn-outline-light btn-sm">Lihat Detail</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
            <div class="card task">
                <div class="card-body text-left">
                    <div class="icon-task float-right">
                        <i class="fa fa-fw fa-lg fa-address-card"></i>
                    </div>
                    <h5 class="card-title mb-3">Pasangan Bupati</h5>
                    <h4 class="card-title nomor fs24">3</h4>
                    <a href="/paslon" class="btn btn-outline-light btn-sm">Lihat Detail</a>
                    
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
            <div class="card task">
                <div class="card-body text-left">
                    <div class="icon-task float-right">
                        <i class="fa fa-fw fa-lg fa-id-card"></i>
                    </div>
                    <h5 class="card-title mb-3">Petugas Kecamatan</h5>
                    <h4 class="card-title nomor fs24">@Kec</h4>
                    <a href="" class="btn btn-outline-light btn-sm">Lihat Detail</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
            <div class="card task">
                <div class="card-body text-left">
                    <div class="icon-task float-right">
                        <i class="fa fa-fw fa-lg fa-address-book"></i>
                    </div>
                    <h5 class="card-title mb-3">Petugas Kabupaten</h5>
               

                    <h4 class="card-title nomor fs24">@Kab</h4>
                    <a href="" class="btn btn-outline-light btn-sm">Lihat Detail</a>
                </div>
            </div>
        </div>
        <div class="col-12 col-lg-4 col-md-6 col-sm-6 text-center">
            <div class="card task">
                <div class="card-body text-left">
                    <div class="icon-task float-right">
                        <i class="fa fa-fw fa-lg fa-file"></i>
                    </div>
                    <h5 class="card-title mb-3">Laporan</h5>
                        <h4 class="card-title nomor fs24">9</h4>
                    <a href="" class="btn btn-outline-light btn-sm">Lihat Detail</a>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
        );
    
}


export default Home;