import React, { Component } from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { getTpsDetail } from '../../Actions/UserActions';
import { Table } from "reactstrap";


const mapStateToProps = (state) => {
    return {
        getTpsDetail: state.tpss.getTpsDetail,
        errorTpsDetail: state.tpss.errorTpsDetail
    }
}

class DetailTps extends Component {
    componentDidMount() {
        this.props.dispatch(getTpsDetail(this.props.match.params.id));
    }
    render() {
        return (

            <div className="container-fluid">
                <div className=" col-8 p-2">
                    <h2>Detail TPS </h2>
                    <hr></hr>
                    <div className="row">
                        <div className="col-12">
                            <Link to="/adminpant4u/tps"><Button className="btn btn-sm btn-dark mb-2"><FontAwesomeIcon icon={faArrowLeft} /> Kembali</Button></Link>
                            <Card>
                                <CardHeader><b>TPS {this.props.getTpsDetail.no_tps}</b></CardHeader>
                                <CardBody>
                                    <Table striped>
                                        <tbody>
                                            <tr>
                                                <td width="200">Lokasi</td>
                                                <td width="10">:</td>
                                                <td>{this.props.getTpsDetail.lokasi}</td>
                                            </tr>
                                            <tr>
                                                <td width="200">Jorong</td>
                                                <td width="10">:</td>
                                                <td>{this.props.getTpsDetail.jorong}</td>
                                            </tr>
                                            <tr>
                                                <td width="200">Nagari</td>
                                                <td width="10">:</td>
                                                <td>{this.props.getTpsDetail.nagari}</td>
                                            </tr>
                                            <tr>
                                                <td width="200">Kecamatan</td>
                                                <td width="10">:</td>
                                                <td>{this.props.getTpsDetail.kecamatan}</td>
                                            </tr>
                                            <tr>
                                                <td width="200">Jumlah Pemilih tetap</td>
                                                <td width="10">:</td>
                                                <td>{this.props.getTpsDetail.jpl}</td>
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

export default connect(mapStateToProps, null)(DetailTps);
