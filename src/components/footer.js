import React from 'react'
import '../index.css';

var totaltps = 461; var tpsmasuk = 193; var persenmasuk = 41.87; var suaramasuk = 41.87;

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { suaras: [] };
    }
    componentDidMount() {
        fetch('https://pantaumicro.azurewebsites.net/suaratotal')
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    suaras: result
                });
            });
    }
    render() {
        return (
            <div className="keterangan sticky-footer">
                <div className="row no-gutters">
                    <div className="col-8 p-1 text-center">
                        <p className="mb-0">
                            <span className="ml-3 text-primary">Jumlah Total TPS : <b id="tot-tps">{this.state.suaras.total_tps}</b></span>
                            <span className="ml-3 text-dark">Jumlah TPS masuk : <b id="tpsmasuk">{this.state.suaras.total_tps_masuk}</b></span>
                            <span className="ml-3 text-info">Persentase Suara Masuk : <b id="persentase">{this.state.suaras.persentase_suara_masuk}%</b></span>
                            <span className="ml-3 text-success">Total Suara masuk : <b id="suaramasuk">{this.state.suaras.total_suara_masuk}</b></span>
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
    }
};
export default Footer;