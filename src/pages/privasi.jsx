import React from 'react'
import '../index.css';
import { Container } from 'reactstrap';
import NavbarComponent from '../components/NavbarComponent';
import FooterPrivasi from '../components/footerprivasi';


const Privasi = () => {
    return (
        <div>
            <NavbarComponent />
            <Container fluid className="mt-3 px-5 mb-5">
                <div className="row">
                    <div className="col-md-9 px-3 pt-0">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="beranda.html" className="text-danger">Beranda</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Kebijakan Privasi</li>
                            </ol>
                        </nav>
                        <h3 className="text-success juduljudul text-danger">Kebijakan Privasi</h3>
                        <p className="small text-muted"><i>halaman tentang Kebijakan privasi NOZYRA RANCAK PANTAU PILKADA</i></p>
                        <div className="card mt-4">
                            <div className="card-body">
                                <div>
                                    <h2><strong>Kebijakan Privasi</strong></h2>
                                    <hr />
                                    <p>PT. NOZYRA Global Solusindo adalah pemilik konten dan operator dari situs https://rancak.nozyra.xyz/ dan aplikasi NOZYRA Rancak serta segala layanan yang disediakan di dalamnya dan layanan lain yang mungkin disediakan NOZYRA Rancak dari waktu ke waktu (secara bersama-sama “Layanan”).</p>
                                    <p>Kami menghargai privasi data dan informasi pribadi, selaku pengguna dan pelanggan Layanan (“Pelanggan”, “Anda”), serta berkomitmen untuk melindungi data dan informasi Anda. Kebijakan privasi ini menjelaskan bagaimana kami mengumpulkan, mengolah, menggunakan dan mengungkapkan data dan informasi Anda (“Kebijakan Privasi”).</p>
                                    <h4><strong>Informasi yang Kami Kumpulkan</strong></h4>
                                    <p>Kami menyimpan informasi dari pendaftaran, cookies dan log files. Data Pribadi bisa termasuk nama, alamat, nomor telepon, atau alamat e-mail Anda. Kami juga mengumpulkan informasi yang tak dapat diidentifikasi secara pribadi, yang mungkin tertaut pada Data Pribadi Anda, termasuk alamat IP Anda, serta preferensi pencarian terkait pada pencarian spesifik. Kami menggunakan informasi ini untuk mendukung sistem ini berjalan dengan baik</p>
                                    <h4><strong>Keamanan</strong></h4>
                                    <p>NOZYRA Rancak akan selalu berusaha melindungi informasi pengguna. Ketika pengguna memberikan informasi rahasia via situs Web, informasi mereka dilindungi secara online maupun offline.</p>
                                    <h4><strong>layanan</strong></h4>
                                    <p>Kami berhubungan dengan pengguna secara teratur untuk menyajikan layanan yang diperlukan dan mengenai persoalan yang berkaitan dengan akun mereka dan kami membalasnya via email atau telepon, sesuai dengan keinginan pengguna</p>
                                    <h4><strong>Lain-lain</strong></h4>
                                    <p>Hukum yang Mengatur dan Yurisdiksi</p>
                                    <p>Kebijakan Privasi ini diatur oleh dan ditafsirkan menurut hukum Negara Republik Indonesia. Setiap dan seluruh sengketa yang timbul dari Kebijakan Privasi ini akan diatur oleh yurisdiksi eksklusif dari Pengadilan Negeri.</p>
                                    <h4><strong>Pengakuan dan Persetujuan</strong></h4>
                                    <p>Dengan menggunakan Aplikasi, Anda mengakui bahwa Anda telah membaca dan memahami Kebijakan Privasi ini dan Ketentuan Penggunaan dan setuju dan sepakat terhadap penyimpanan, penggunaan, pemrosesan, pemberian dan pengalihan Informasi Pribadi Anda oleh NOZYRA Rancak sebagaimana dinyatakan di dalam Kebijakan Privasi ini.</p>
                                    <p>NOZYRA Rancak juga menyatakan bahwa Anda memiliki hak untuk memberikan seluruh informasi yang telah Anda berikan kepada NOZYRA Rancak dan untuk memberikan hak kepada NOZYRA Rancak untuk memproses dan menggunakan serta memberikan informasi guna mendukung dan melaksanakan fungsi Aplikasi dan membebaskan NOZYRA Rancak dari segala tuntutan apabila di kemudian hari terdapat tuntutan ketidakabsahan hak Anda dalam memberikan informasi.</p>
                                    <h4><strong>Cara untuk Menghubungi NOZYRA Rancak</strong></h4>
                                    <p>Jika Anda memiliki pertanyaan lebih lanjut tentang privasi dan keamanan informasi Anda atau ingin memperbarui atau menghapus data Anda maka silakan hubungi kami di: info@nozyra.com</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </Container>
            <FooterPrivasi />
        </div>
    );
}

export default Privasi;