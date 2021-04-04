import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import brandlogo from "../image/logo-rancak-white.png"
import '../index.css';

const Footer = () => {
    return (
        <div class="keterangan sticky-footer">
        <div class="row no-gutters">
            <div class="col-8 p-1 text-center">
                <p class="mb-0">
                    <span class="ml-3 text-primary">Jumlah Total TPS : <b id="tot-tps">0</b></span>
                    <span class="ml-3 text-dark">Jumlah TPS masuk : <b id="tpsmasuk">0</b></span>
                    <span class="ml-3 text-info">Persentase Suara Masuk : <b id="persentase">0.0%</b></span>
                    <span class="ml-3 text-success">Total Suara masuk : <b id="suaramasuk">0</b></span>
                </p>
            </div>
            <div class="col-2 jam">
                <div>
                    <p class="text-center mb-0 text-dark bold" id="tanggal">0 Bulan 0000</p>
                    <h5 class="text-center bold"><span id="jam">00</span> : <span id="menit">00</span> : <span id="detik">00</span></h5>
                </div>
            </div>
            <div class="col-2 text-center">
                <a href="https://www.nozyra.com" target=""><b>www.nozyra.com</b></a>
            </div>
        </div>
    </div>

    )
};
export default Footer;