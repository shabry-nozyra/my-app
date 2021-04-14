import React from 'react'
import '../index.css';

const Footer = () => {
    return (
        <div className="keterangan sticky-footer">
        <div className="row no-gutters">
            <div className="col-8 p-1 text-center">
                <p className="mb-0">
                    <span className="ml-3 text-primary">Jumlah Total TPS : <b id="tot-tps">0</b></span>
                    <span className="ml-3 text-dark">Jumlah TPS masuk : <b id="tpsmasuk">0</b></span>
                    <span className="ml-3 text-info">Persentase Suara Masuk : <b id="persentase">0.0%</b></span>
                    <span className="ml-3 text-success">Total Suara masuk : <b id="suaramasuk">0</b></span>
                </p>
            </div>
            <div className="col-2 jam">
                <div>
                    <p className="text-center mb-0 text-dark bold" id="tanggal">0 Bulan 0000</p>
                    <h5 className="text-center bold"><span id="jam">00</span> : <span id="menit">00</span> : <span id="detik">00</span></h5>
                </div>
            </div>
            <div className="col-2 text-center">
                <a href="https://www.nozyra.com" target=""><b>www.nozyra.com</b></a>
            </div>
        </div>
    </div>

    )
};
export default Footer;