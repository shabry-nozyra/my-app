import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import swal from 'sweetalert';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { deleteUser } from "../Actions/UserActions";
import { NavbarAdmin } from '../components/NavbarAdmin';
import Sidebar from "../components/Sidebar";


const handleClick = (id) => {

    swal({
        title: "Apakah Anda yakin akan menghapus data ini ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                deleteUser(id)
                swal("Data User Sukses dihapus", {
                    icon: "success",
                });
            } else {
                swal("Data gagal dihapus");
            }
        });
};
const { SearchBar } = Search;
const columns = [{
    dataField: 'kecamatan',
    text: 'Kecamatan',
    sort: true
}, {
    dataField: 'nama_lengkap',
    sort: true,
    text: 'Nama Lengkap'
}, {
    dataField: 'username',
    sort: true,
    text: 'Username'
}, {
    dataField: 'no_hp',
    sort: true,
    text: 'No Hp'
}, {
    dataField: 'email',
    sort: true,
    text: 'Email',
    headerStyle: () => {
        return { width: "8%" };
    },
}, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"detail/" + row.id}>
                    <Button color="dark" className="m-1 btn-sm">
                        <i className="fa fa-fw fa-eye"></i>
                    </Button>
                </Link>

                <Link to={"edit/" + row.id}>
                    <Button color="dark" className="m-1 btn-sm">
                        <i className="fa fa-fw fa-edit"></i>
                    </Button>
                </Link>

                <Button color="dark" className="m-1 btn-sm" onClick={() => handleClick(row.id)}>
                    <i className="fa fa-fw fa-trash"></i>
                </Button>
            </div>
        );
    },
}];

const defaultSorted = [{
    dataField: 'kecamatan',
    order: 'asc'
}];
class PetugasKecamatan extends React.Component {
    state = {
        petugaskecs: []
    }

    componentDidMount() {
        fetch('https://pantauapp.azurewebsites.net/petugaskec')
            .then(response => {
                return response.json();
            }).then(results => {
                this.setState({
                    petugaskecs: results
                });
            });
    }

    render() {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavbarAdmin />
                        <div className="container-fluid">
                            <div className="p-2">
                                <h2>Daftar Petugas Kecamatan</h2>
                                <hr></hr>
                                <div className="text-right p-3">
                                    <a className="btn btn-primary" href="tambahtps">Tambah Petugas Kecamatan Baru</a>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card p-3 shadow-sign border-0 mt-3">
                                            <div className="row pt-2">
                                                <div className="col-12">
                                                    <form className="form col-12" action="" method="POST">
                                                        <div className="row align-items-center my-3">
                                                            <div className="col-4 my-1">
                                                                kecamatan :
                                                    <select name="kecamatan" id="kecamatan" className="form-control fs13">
                                                                    <option value="">- Pilih Kecamatan -</option>

                                                                    <option value='koto parik gadang diateh'>koto parik gadang
                                                            diateh</option>
                                                                    <option value='pauh duo'>pauh duo</option>
                                                                    <option value='sangir'>sangir</option>
                                                                    <option value='sangir jujuan'>sangir jujuan</option>
                                                                    <option value='sangir balai janggo'>sangir balai janggo</option>
                                                                    <option value='sangir batang hari'>sangir batang hari</option>
                                                                    <option value='sungai pagu'>sungai pagu</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-4 my-1">
                                                                Nagari :
                                                    <select name="nagari" id="nagari" className="form-control fs13">
                                                                    <option value="all">- Pilih Nagari -</option>

                                                                </select>
                                                            </div>
                                                            <div className="col-4 my-1">
                                                                <button type="submit" className="btn btn-primary mt-3 px-5 btn-block"
                                                                    name="filter">Filter</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className=" col-12 text-right">
                                                    <div>
                                                        <a className="btn btn-danger mr-3" target="_blank"
                                                            href=""><i
                                                                className="fa fa-fw fa-file-pdf"></i> Simpan pdf</a>
                                                    </div>
                                                </div>


                                                <div className="col-12">
                                                    <br />
                                                </div>

                                                <div className="col-12 pt-3">
                                                    <div className="tabel-besar">

                                                        <ToolkitProvider
                                                            bootstrap4
                                                            className="tabel-besar"
                                                            keyField='kecamatan'
                                                            data={this.state.petugaskecs}
                                                            columns={columns}
                                                            defaultSorted={defaultSorted}
                                                            search
                                                        >
                                                            {
                                                                props => (
                                                                    <div>
                                                                        <SearchBar {...props.searchProps} />
                                                                        <hr />
                                                                        <BootstrapTable
                                                                            {...props.baseProps} pagination={paginationFactory()}
                                                                        />
                                                                    </div>
                                                                )
                                                            }
                                                        </ToolkitProvider>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PetugasKecamatan;




