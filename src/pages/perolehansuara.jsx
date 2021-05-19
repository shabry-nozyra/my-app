import React from 'react';
import { Container, NavItem } from 'reactstrap';
import CardComponent from '../components/CardComponent';
import FooterPrivasi from '../components/footerprivasi';

import NavbarComponent from '../components/NavbarComponent';
import '../index.css';


const jumlahjpl = 0;
const jumlahnagari = 0;
const jumlahtps = 0;
class PerolehanSuara extends React.Component {
    constructor(props) {
        super(props);
        this.state = { results: [] };
        this.headers = [
            { key: 'kecamatan', label: 'Kecamatan' },
        ];
    }
    componentDidMount() {
        fetch('https://pantaumicro.azurewebsites.net/NamaKec')
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    results: result
                });
            });
    }
    render() {
        return (
            <div>
                <NavbarComponent />
                <Container fluid className="mt-3 px-5 mb-5">
                    <div className="row">
                        <div className="col-md-9 px-3 pt-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/beranda" className="text-danger">Beranda</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Data TPS perkecamatan</li>
                                </ol>
                            </nav>
                            <h3 className="text-danger juduljudul">Data Suara Pemilihan Bupati di Setiap TPS / Kecamatan</h3>
                            <p className="small text-muted"><i>Informasi suara pemilihan Calon Bupati pada setiap TPS dikecamatan</i></p>
                            <div className="row">
                                {
                                    this.state.results.map(function (item, key) {
                                        return (

                                            <div className="col-md-4 p-2" key={key.toString()}>
                                                <div className="card">
                                                    <div className="card-header bg-danger">
                                                        <h6 className="mb-0 text-white">{item.kecamatan}</h6>
                                                    </div>
                                                    <div className="card-body p-2">  
                                                      <CardComponent kecamatan={item.kecamatan}/>
                                                        <a href={"/detail/"+item.kecamatan} className="btn btn-outline-danger btn-sm  float-right">Detail</a>
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
                                            this.state.results.map(function (item, key) {
                                                return (
                                                    <a href={"/detail/" + item.kecamatan} className="text-dark" key={key.toString()}>
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

export default PerolehanSuara;