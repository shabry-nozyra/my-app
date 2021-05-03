import React from 'react'
import { Container } from 'reactstrap'
import '../index.css';
import {
    Card, CardHeader, CardBody
} from 'reactstrap';
import { Table } from 'reactstrap';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/footer';

const Kecurangan = () => {
    return (
        <div>
        <NavbarComponent />
        <Container fluid className="mt-3 px-5">
            <div className="row">
                <div className="col-md-9 px-3 pt-0">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="beranda.html" className="text-danger">Beranda</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Kecurangan</li>
                        </ol>
                    </nav>
                    <h3 className="text-success juduljudul text-danger">Informasi Kecurangan</h3>
                    <p className="small text-muted"><i>halaman tentang informasi kecurangan</i></p>
                    
                    {/* <Card>
                        <CardHeader>Test_Nama_Kecurangan</CardHeader>
                        <CardBody>
                            <Table striped>
                                <tbody>
                                    <tr>
                                        <th>Tanggal Kejadian</th>
                                        <th>12 April 2021</th>
                                    </tr>

                                    <tr>
                                        <th scope="row">Lokasi Kejadian</th>
                                        <td>TPS 45 Nagari Sangir</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Detail Kejadian Kejadian</th>
                                        <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui omnis assumenda placeat dolores amet perspiciatis quam laborum maxime ipsum minima repellendus at, quaerat rem vero facere beatae voluptatibus enim nostrum?</td>
                                    </tr>

                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                 */}

                 <div className="alert alert-danger">Belum ada data</div>

                </div>
                <div className="col-md-3  p-0">
                    <div className="card">
                        <div className="card-header bg-danger pl-3">
                            <h6 className="text-white">Jumlah Kecurangan perkecamatan</h6>
                        </div>
                        <div className="card-body p-2">
                            <ul>
                                <li>Tidak Ada Kecurangan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

   
        <Footer/>
        </div>
     );
}

export default Kecurangan;