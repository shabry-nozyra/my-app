import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { deletePaslon } from '../../Actions/PaslonActions';
import swal from "sweetalert";
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return{
        getPaslonList: state.paslons.getPaslonList,
        errorPaslon: state.paslons.errorPaslon
    }
}

const handleClick = (id) => {
    swal({
      title: "Apakah Anda yakin akan menghapus data ini ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        deletePaslon(id)
        swal("Data Paslon Sukses dihapus", {
          icon: "success",
        });
        window.location.href = "/adminpant4u/paslon";
      } else {
       
      }
    });
  }
class PaslonComponent extends React.Component {
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
        fetch('https://pantauapp.azurewebsites.net/paslon')
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
            <div>
                <h2>Daftar Pasangan Calon Bupati</h2>
                <hr></hr>
                <div className="text-right p-3">
                    <a className="btn btn-primary" href="/adminpant4u/paslon/tambah">Tambahkan Pasangan Calon</a>
                </div>
                <div className="row">

                    {
                        this.state.paslons.map(function (item, key) {
                            return (


                                <div className="col-md-4" key={'i' + key}>
                                    <Card key={key} className="mb-4">
                                        <Card.Img variant="top"
                                            src={"https://pantaustorage01.blob.core.windows.net/blobpantau/" + item.foto}
                                        />
                                        <Card.Body className="text-center">
                                            <Card.Title className="NamaBupati"><b>{item.bupati} - {item.wakil}</b></Card.Title>
                                            <Card.Text>
                                                <p className="small">No Urut : {item.no_urut}</p>
                                            </Card.Text>
                                        </Card.Body>
                                        <div class="float-icon" id="1">
                                            <Link to={"/adminpant4u/detailpaslon/" + item.id}>
                                                <Button className="btn btn-info text-white ml-0 btn-sm">
                                                    <FontAwesomeIcon icon={faEye} className="fa fa-fw" />
                                                </Button>
                                            </Link>
                                            <Link to={"/adminpant4u/editpaslon/" + item.id}>
                                                <Button className="btn btn-warning text-white ml-0 btn-sm">
                                                    <FontAwesomeIcon icon={faEdit} className="fa fa-fw" />
                                                </Button>
                                            </Link>
                                          
                                            <Button color="dark" className="btn btn-warning text-white btn-sm ml-2 mt-1" onClick={() => handleClick( item.id)}>
                                                <FontAwesomeIcon icon={faTrash}  className="fa fa-fw"/>
                                            </Button>
                                            
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
export default connect(mapStateToProps, null)(PaslonComponent);
