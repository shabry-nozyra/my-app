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
    dataField: 'id',
    text: 'No',
    sort: true
}, {
    dataField: 'halaman',
    sort: true,
    text: 'Halaman'
}, {
    dataField: 'konten',
    sort: true,
    text: 'Nama Konten'
}, {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
        return (
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavbarAdmin />
                        <div className="container-fluid">
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
                        </div>
                    </div>
                </div>
            </div>
        );
    },
}];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}];
class PageContent extends React.Component {
    state = {
        contents: []
    }

    componentDidMount() {
        fetch('https://pantauapp.azurewebsites.net/konten')
            .then(response => {
                return response.json();
            }).then(results => {
                this.setState({
                    contens: results
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
                                <h2>Daftar Halaman</h2>
                                <hr></hr>
                                <div className="text-right p-3">
                                    <a className="btn btn-primary" href="tambahtps">Tambah Halaman Baru</a>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="card p-3 shadow-sign border-0 mt-3">
                                            <div className="row pt-2">
                                                <div className="col-12 pt-3">
                                                    <div className="tabel-besar">

                                                        <ToolkitProvider
                                                            bootstrap4
                                                            className="tabel-besar"
                                                            keyField='kecamatan'
                                                            data={this.state.contents}
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

export default PageContent;




