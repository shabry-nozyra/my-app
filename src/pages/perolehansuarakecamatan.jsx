import React from 'react';
import { Container } from 'reactstrap';
import '../index.css';
import Foto from "../image/img.jpg";

import Footer from '../components/footer';
import NavbarComponent from '../components/NavbarComponent';
class PerolehanSuaraKecamatan extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [] };
        this.headers = [
            { key: 'id', label: 'id' },
            { key: 'id_tps', label: 'id_tps' },
            { key: 'suara1', label: 'suara1' },
            { key: 'suara2', label: 'suara2' },
            { key: 'suara3', label: 'suara3' },
            { key: 'jpl', label: 'jpl' },
        ];
    }
    componentDidMount() {
        var kec = this.props.match.params.kec
        fetch('https://pantaumicro.azurewebsites.net/suaraByKec/'+kec)
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    results: result
                });
            });
    }
    render() {
        var kec = this.props.match.params.kec;
        return (
            <div>
                <NavbarComponent />
                <Container fluid className="mt-3 px-5">
                    <div className="row">
                        <div className="col-md-9 px-3 pt-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/beranda" className="text-danger">Beranda</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data TPS</li>
                                </ol>
                            </nav>
                            <h3 className="text-danger juduljudul">{kec}</h3>
                            <p className="small text-muted"><i>Informasi suara pemilihan Calon Bupati pada setiap TPS dikecamatan</i></p>
                            <div className="row">

                                {
                                    this.state.results.map(function (item, key) {
                                        return (
                                            <div className="col-md-4 p-2">
                                                <div className="card">
                                                    <div className="card-header bg-danger p-2">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <p className="mb-0 text-white">TPS {item.id_tps}</p>
                                                            </div>
                                                            <div className="col-9">
                                                                <p className="mb-0 text-left text-white small">Nagari {"{nama_nagari}"}</p>
                                                                <p className="mb-0 small text-white">{"{nama_lokasi}"}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body p-2">

                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="card mb-3">
                                                                    <div className="row no-gutters">
                                                                        <div className="col-md-6 d-flex justify-content-center align-items-center p-1">
                                                                            <img src={Foto} className="card-img" alt="foto_paslon_1" />
                                                                        </div>
                                                                        <div className="col-md-6 d-flex justify-content-center align-items-center p-2">
                                                                            <h2 className="card-title">{item.suara1}</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="card mb-3">
                                                                    <div className="row no-gutters">
                                                                        <div className="col-md-6 d-flex justify-content-center align-items-center p-1">
                                                                            <img src={Foto} className="card-img" alt="foto_paslon_2" />
                                                                        </div>
                                                                        <div className="col-md-6 d-flex justify-content-center align-items-center p-2">
                                                                            <h2 className="card-title">{item.suara2}</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="card mb-3">
                                                                    <div className="row no-gutters">
                                                                        <div className="col-md-6 d-flex justify-content-center align-items-center p-1">
                                                                            <img src={Foto} className="card-img" alt="foto_paslon_3" />
                                                                        </div>
                                                                        <div className="col-md-6 d-flex justify-content-center align-items-center p-2">
                                                                            <h2 className="card-title">{item.suara3}</h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="card-footer text-muted">
                                                        <div className="row d-flex justify-content-between">
                                                            <div className="col-8">
                                                                <footer className="blockquote-footer">Jumlah Pemilih Tetap : {item.jpl}</footer>
                                                            </div>
                                                            <div className="col-4">
                                                                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                    <div className="modal-dialog modal-lg">
                                                                        <div className="modal-content">
                                                                            <div className="modal-header bg-danger text-white">
                                                                                <h5 className="modal-title" id="exampleModalLabel">TPS 6 - Nagari pakan rabaa utara                                                            - Jorong </h5>
                                                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                    <span aria-hidden="true">×</span>
                                                                                </button>
                                                                            </div>
                                                                            <div className="modal-body">
                                                                                <div className="row">
                                                                                    <div className="col-6">

                                                                                        <div className="row no-gutters">
                                                                                            <div className="col-md-4 d-flex justify-content-center align-items-center p-1">
                                                                                                <img src="https://rancak.nozyra.xyz/assets/images/paslonbupati/0ca91873c82e1769c4155317d9512e94.jpg" className="card-img" alt="..." />
                                                                                            </div>
                                                                                            <div className="col-md-8 text-left p-2">

                                                                                                <h4 className="card-title mb-0">2</h4>

                                                                                                <h1 className="card-title mb-0">0 %</h1>
                                                                                                <h4 className="card-title mb-0">60 Suara</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row no-gutters">
                                                                                            <div className="col-md-4 d-flex justify-content-center align-items-center p-1">
                                                                                                <img src="https://rancak.nozyra.xyz/assets/images/paslonbupati/5c10ded8c3632be7630ae6f45f868138.jpg" className="card-img" alt="..." />
                                                                                            </div>
                                                                                            <div className="col-md-8 text-left p-2">

                                                                                                <h4 className="card-title mb-0">3</h4>

                                                                                                <h1 className="card-title mb-0">0 %</h1>
                                                                                                <h4 className="card-title mb-0">42 Suara</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row no-gutters">
                                                                                            <div className="col-md-4 d-flex justify-content-center align-items-center p-1">
                                                                                                <img src="https://rancak.nozyra.xyz/assets/images/paslonbupati/5cb6c7002e76d00cf4bf9bbbff8c33a7.jpg" className="card-img" alt="..." />
                                                                                            </div>
                                                                                            <div className="col-md-8 text-left p-2">

                                                                                                <h4 className="card-title mb-0">1</h4>

                                                                                                <h1 className="card-title mb-0">0 %</h1>
                                                                                                <h4 className="card-title mb-0">35 Suara</h4>
                                                                                            </div>
                                                                                        </div>

                                                                                    </div>
                                                                                    <div className="col-6">
                                                                                        <div className="row">
                                                                                            <div className="col-8">
                                                                                                <h4>Suara Sah</h4>
                                                                                            </div>
                                                                                            <div className="col-4">
                                                                                                <h4>: </h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row mt-3">
                                                                                            <div className="col-8">
                                                                                                <h4>Suara Tidak Sah</h4>
                                                                                            </div>
                                                                                            <div className="col-4">
                                                                                                <h4>: 7</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row mt-3">
                                                                                            <div className="col-8">
                                                                                                <h4>Jumlah Suara Masuk</h4>
                                                                                            </div>
                                                                                            <div className="col-4">
                                                                                                <h4>: 7</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row mt-3">
                                                                                            <div className="col-8">
                                                                                                <h4>Jumlah Pemilih Tetap</h4>
                                                                                            </div>
                                                                                            <div className="col-4">
                                                                                                <h4>: 180</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="row mt-3">
                                                                                            <div className="col-8">
                                                                                                <h4>Suara Golput</h4>
                                                                                            </div>
                                                                                            <div className="col-4">
                                                                                                <h4>: 36</h4>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="modal-footer">
                                                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
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
}

export default PerolehanSuaraKecamatan;