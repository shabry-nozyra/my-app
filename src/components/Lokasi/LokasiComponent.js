import React from 'react'
import DropdownComponent from '../DropdownComponent';

const LokasiComponent = () => {
        return (
                <div className="p-2">
                        <h2>Lokasi</h2>
                        <hr></hr>
                        <div className="text-right p-3">
                            <a className="btn btn-primary" href="/adminpant4u/tps/add">Tambah Lokasi Baru</a>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card p-3 shadow-sign border-0 mt-3">
                                    <DropdownComponent />
                                </div>
                            </div>
                        </div>
                    </div>
        )
}

export default LokasiComponent;
