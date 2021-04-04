import React from 'react'
import {Nav, Container, Button } from 'react-bootstrap'
import { Card, CardHeader, CardBody, CardTitle, CardText, CardFooter, CardImg } from 'reactstrap'
// import { Link } from "react-router-dom"
import paslon1 from "../image/img.jpg"
import '../index.css';
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/footer';

const MainPage = () => {
    return (
        <div className="">
            <NavbarComponent />
            <Container fluid className="mt-3 px-5">
                <div className="row">
                    <div className="col-md-8 center">
                        <div className="text-center judul">
                            <h4 className="text-danger">Perhitungan Cepat</h4>
                            <h5>PEMILIHAN BUPATI DAN WAKIL BUPATI KABUPATEN SOLOK SELATAN</h5>
                            <h5>Periode 2021-2026</h5>
                        </div>
                        <div className="calon row">
                            <div className="col-4">
                                <Card className="p-0 border-0">
                                    <CardBody className="text-center p-0">
                                        <CardText><h1>0%</h1></CardText>
                                        <h5>0 Suara</h5>
                                        <h1>1</h1>
                                        <img top src={paslon1} alt="Card image cap" width="80%"/>
                                        <CardText>Nama Pasangan Calon</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-4">
                                <Card className="p-0 border-0">
                                    <CardBody className="text-center p-0">
                                        <CardText><h1>0%</h1></CardText>
                                        <h5>0 Suara</h5>
                                        <h1>2</h1>
                                        <img top src={paslon1} alt="Card image cap" width="80%"/>
                                        <CardText>Nama Pasangan Calon</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-4">
                                <Card className="p-0 border-0">
                                    <CardBody className="text-center p-0">
                                        <CardText><h1>0%</h1></CardText>
                                        <h5>0 Suara</h5>
                                        <h1>3</h1>
                                        <img top src={paslon1} alt="Card image cap" width="80%"/>
                                        <CardText>Nama Pasangan Calon</CardText>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <Card>
                            <CardHeader className="bg-dark text-white">Peta Sebaran Suara</CardHeader>
                            <CardBody className="h-300 text-center">
                                <img src="" alt="peta-sebaran-suara" height="300px"/>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </Container>

            <Footer />
             </div >
    );
}

export default MainPage;