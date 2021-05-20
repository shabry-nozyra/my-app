import React from 'react'
import jsPDF from 'jspdf';

const logSaksiReport = () => {
    var doc = new jsPDF('l', 'px');
    doc.setFont('Arial')
    doc.setFontSize(14)
    doc.text(20, 20, "Laporan")
    doc.text(100, 20, ": Log Aktifitas Saksi TPS")
    doc.save("log-saksi-report.pdf")
}
const logAktifitasReport = () => {
    var doc = new jsPDF('p', 'px');
    doc.text(20, 20, 'log aktifitas report')
    doc.setFont('courier')
    doc.save("log aktifitas-report.pdf")
}
const suaraReport = () => {
    var doc = new jsPDF('p', 'px');
    doc.text(20, 20, 'suara-report')
    doc.setFont('courier')
    doc.save("suara-report.pdf")
}
class Report extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="p-2">
                    <h2>Laporan</h2>
                    <hr></hr>
                    <div className="row">
                        <div className="col-12">
                            <button className=" text-left btn btn-dark  d-block m-2" style={{ width: 280 }} onClick={suaraReport}>1. Laporan Suara Pemilihan Bupati</button>
                            <button className=" text-left btn btn-dark  d-block m-2" style={{ width: 280 }} onClick={logSaksiReport}>2. Laporan Log Aktifitas Saksi TPS</button>
                            <button className="text-left btn btn-dark  d-block m-2" style={{ width: 280 }} onClick={logAktifitasReport}>3. Laporan Log Aktifitas</button>
                        </div>
                        <div className="col-12">
                        {/* <embed type="application/pdf" src="https://rancak.nozyra.xyz/laporantps/suara" width="100%" height="500px"></embed> */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Report;




