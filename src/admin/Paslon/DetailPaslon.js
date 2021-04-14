import React, { Component } from 'react'

import { Card, CardHeader, CardBody } from 'reactstrap'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { getPaslonDetail } from '../../Actions/PaslonActions';
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
    return {
        getPaslonDetail: state.paslons.getPaslonDetail,
        errorPaslonDetail: state.paslons.errorPaslonDetail
    }
}

class DetailPaslon extends Component {
    componentDidMount() {
        this.props.dispatch(getPaslonDetail(this.props.match.params.id));
    }
    render() {
        return (
            <div className="container-fluid">
                <div className=" col-8 p-2">
                    <h2>Detail Pasangan Calon</h2>
                    <hr></hr>
                    <div className="row">
                        <div className="col-12">
                            <Link to="/adminpant4u/paslon"><Button className="btn btn-sm btn-dark mb-2"><FontAwesomeIcon icon={faArrowLeft} /> Kembali</Button></Link>
                            <Card>
                                <CardHeader><b>Pasangan Calon No urut {this.props.getPaslonDetail.no_urut}</b></CardHeader>
                                <CardBody>
                                    <Table striped>
                                        <tbody>
                                            <tr>
                                                <td width="200">Bupati</td>
                                                <td width="10">:</td>
                                                <td>{this.props.getPaslonDetail.bupati}</td>
                                            </tr>
                                            <tr>
                                                <td width="200">Wakil</td>
                                                <td width="10">:</td>
                                                <td>{this.props.getPaslonDetail.wakil}</td>
                                            </tr>
                                            <tr>
                                                <td width="200">No Urut</td>
                                                <td width="10">:</td>
                                                <td>{this.props.getPaslonDetail.no_urut}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>

            </div>


        
        )
    }
}

export default connect(mapStateToProps, null)(DetailPaslon);
