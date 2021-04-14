import React from 'react'
import {connect} from 'react-redux';
import TableComponent from './TableComponent';

const mapStateToProps = (state) => {
    return{
        getTpsList: state.tpss.getTpsList,
        errorTps: state.tpss.errorTps
    }
}

const TpsComponent = (props) => {
        return (
                <div className="p-2">
                        <h2>Daftar TPS</h2>
                        <hr></hr>
                        <div className="text-right p-3">
                            <a className="btn btn-primary" href="/adminpant4u/tps/add">Tambah TPS Baru</a>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card p-3 shadow-sign border-0 mt-3">
                                    <TableComponent />
                                </div>
                            </div>
                        </div>
                    </div>
        )
}

export default connect(mapStateToProps, null)(TpsComponent);
