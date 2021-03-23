import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';

class Paslon extends React.Component {
    constructor(props) {
        super(props);
        this.state = { paslons: [] };
        this.headers = [
            { key: 'id', label: 'Id' },
            { key: 'bupati', label: 'Bupati' },
            { key: 'wakil', label: 'Wakil' },
            { key: 'no_urut', label: 'No Urut' }
        ];
    }
    componentDidMount() {
        fetch('http://localhost:8080/paslon')
            .then(response => {
                return response.json();
            }).then(result => {
                this.setState({
                    paslons: result
                });
            });
    }


    render() {
        return (
            <div className="p-2">
                <h2>Daftar Pasangan Calon Bupati</h2>
                <hr></hr>
                <div className="text-right p-3">
                    <a className="btn btn-primary" href="tambahpaslon">Tambahkan Pasangan Calon</a>
                </div>
                <div className="row">

                    {
                        this.state.paslons.map(function (item, key) {
                            return (
                                <div className="col-md-4" key={'i' + key}>
                                    <Card key={key} className="mb-4">
                                        <Card.Img variant="top"
                                            src={
                                                "https://rancak.nozyra.xyz/assets/images/paslonbupati/5c10ded8c3632be7630ae6f45f868138.jpg"
                                            }
                                        />
                                        <Card.Body className="text-center">
                                            <Card.Title className="NamaBupati"><b>{item.bupati} - {item.wakil}</b></Card.Title>
                                            <Card.Text>
                                                <p className="small">No Urut : {item.no_urut}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <div class="float-icon" id="1">
                                            <a class="btn btn-danger text-white" data-toggle="tooltip" data-placement="top" title="" href="https://rancak.nozyra.xyz/pasanganbupati/hapus/1" onclick="return confirm('yakin ingin menghapus data?')" data-original-title="Hapus"><i class="fa fa-fw  fa-trash"></i></a>
                                            <a href="editpaslon/" class="btn btn-warning text-white" data-toggle="tooltip" data-placement="top" title="" data-original-title="Edit"><i class="fa fa-fw fa-edit"></i></a>
                                        </div>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Paslon;
