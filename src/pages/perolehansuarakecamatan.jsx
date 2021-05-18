import React from 'react';
import { Container } from 'reactstrap';
import '../index.css';
import NavbarComponent from '../components/NavbarComponent';
import FooterPrivasi from '../components/footerprivasi';
class PerolehanSuaraKecamatan extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [], kecamatan: [], paslons: [] };
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
        fetch('https://pantaumicro.azurewebsites.net/suaraByKec/' + kec)
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    results: result
                });
            });
        fetch('https://pantauapp.azurewebsites.net/paslon')
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    paslons: result
                });
            });
        fetch('https://pantaumicro.azurewebsites.net/NamaKec')
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    kecamatan: result
                });
            });
    }
    render() {
        var kec = this.props.match.params.kec;
        var fotopaslon = this.state.paslons;
        var suarapaslon = this.state.results;
        console.log(suarapaslon);
        return (
            <div>
                <NavbarComponent />
                <Container fluid className="mt-3 px-5 mb-5">
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
                                                                <p className="mb-0 text-white">TPS {item.no_tps}</p>
                                                            </div>
                                                            <div className="col-9">
                                                                <p className="mb-0 text-left text-white small">Nagari {item.nagari}</p>
                                                                <p className="mb-0 small text-white">{item.lokasi}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body p-2">

                                                        <div className="row">
                                                            {
                                                                fotopaslon.map(function (itemku, keyku) {
                                                                    return (
                                                                        <div className="col-6">
                                                                            <div className="card mb-3">
                                                                                <div className="row no-gutters">
                                                                                    <div className="col-md-6 d-flex justify-content-center align-items-center p-1">
                                                                                        <img src={"https://pantaustorage01.blob.core.windows.net/blobpantau/" + itemku.foto} className="card-img" alt="foto_paslon_3" />
                                                                                    </div>
                                                                                    <div className="col-md-6 d-flex justify-content-center align-items-center p-2">
                                                                                         {keyku == 0 ? item.suara1: ""}
                                                                                         {keyku == 1 ? item.suara2: ""}
                                                                                         {keyku == 2 ? item.suara3: ""}
                                                                                            {/* <h2 className="card-title">{item.suara2}</h2>   */}
                                    
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                    </div>
                                                    <div className="card-footer text-muted">
                                                        <div className="row d-flex justify-content-between">
                                                            <div className="col-12">
                                                                <footer className="blockquote-footer">Jumlah Pemilih Tetap : {item.jpl}</footer>
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
                                        {
                                            this.state.kecamatan.map(function (item, key) {
                                                return (
                                                    <a href={"/detail/" + item.kecamatan} className="text-dark" id={key}>
                                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                                            {item.kecamatan}
                                                        </li>
                                                    </a>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
                <FooterPrivasi />
            </div>
        );
    }
}

export default PerolehanSuaraKecamatan;