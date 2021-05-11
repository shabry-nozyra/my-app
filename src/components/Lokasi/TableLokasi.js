import React, { Component } from 'react';
import { Table } from 'reactstrap';

class TableLokasi extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { lokasis: [] };
    //     this.headers = [
    //         { key: 'id', label: 'Id' },
    //         { key: 'nama_jorong', label: 'nama_jorong' },
    //         { key: 'nama_nagari', label: 'nama_nagari' },
    //         { key: 'nama_kecamatan', label: 'nama_kecamatan' }
    //     ];
    // }
    // componentDidMount() {
    //     fetch('http://localhost:8080/lokasi')
    //         .then(response => {
    //             return response.json();
    //         }).then(result => {
    //             this.setState({
    //                 lokasis: result
    //             });
    //         });
    // }
    render() {
        return (
            <div>
                <Table striped>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama Jorong</th>
                            <th>Nagari</th>
                            <th>Kecamatan</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            this.state.lokasis.map(function (item, key) {
                                return (
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>{item.nama_jorong}</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )
                            })
                        } */}
                    </tbody>
                </Table>

            </div>
        )
    }
}

export default TableLokasi
