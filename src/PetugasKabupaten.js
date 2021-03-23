import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import swal from 'sweetalert';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { deleteUser } from "../src/Actions/UserActions";


const handleClick = (dispatch, id) => {

    swal({
        title: "Apakah Anda yakin akan menghapus data ini ?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                dispatch(deleteUser(id))
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
    dataField: 'nama_lengkap',
    sort: true,
    text: 'Nama Lengkap'
},  {
    dataField: 'username',
    sort: true,
    text: 'Username'
},{
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

                <Button color="dark" className="m-1 btn-sm" onClick={() => handleClick(this.state.dispatch, row.id)}>
                    <i className="fa fa-fw fa-trash"></i>
                </Button>
            </div>
        );
    },
}];

const defaultSorted = [{
    dataField: 'nama_lengkap',
    order: 'asc'
}];
class PetugasKabupaten extends React.Component {
    state = {
        petugaskabs: []
    }

    componentDidMount() {
        fetch('http://localhost:8080/petugaskab')
            .then(response => {
                return response.json();
            }).then(results => {
                this.setState({
                    petugaskabs: results
                });
            });
    }

    render() {
        return (
            <div className="p-2">
                <h2>Daftar Petugas Kabupaten</h2>
                <hr></hr>
                <div className="text-right p-3">
                    <a className="btn btn-primary" href="tambahtps">Tambah Petugas Kabupaten Baru</a>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card p-3 shadow-sign border-0 mt-3">
                            <div class="row pt-2">
                                <div class="col-12">
                                    <form class="form col-12" action="" method="POST">
                                        <div class="row align-items-center my-3">
                                            <div class="col-4 my-1">
                                                kecamatan :
                                                    <select name="kecamatan" id="kecamatan" class="form-control fs13">
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
                                            <div class="col-4 my-1">
                                                Nagari :
                                                    <select name="nagari" id="nagari" class="form-control fs13">
                                                    <option value="all">- Pilih Nagari -</option>

                                                </select>
                                            </div>
                                            <div class="col-4 my-1">
                                                <button type="submit" class="btn btn-primary mt-3 px-5 btn-block"
                                                    name="filter">Filter</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class=" col-12 text-right">
                                    <div>
                                        <a class="btn btn-danger mr-3" target="_blank"
                                            href="https://rancak.nozyra.xyz/laporantps/tps"><i
                                                class="fa fa-fw fa-file-pdf"></i> Simpan pdf</a>
                                    </div>
                                </div>


                                <div class="col-12">
                                    <br />
                                </div>

                                <div class="col-12 pt-3">
                                    <div class="tabel-besar">

                                        <ToolkitProvider
                                            bootstrap4 
                                            className="tabel-besar"
                                            keyField='kecamatan' 
                                            data={this.state.petugaskabs} 
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
                                                            {...props.baseProps} pagination={ paginationFactory() }
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
        )
    }
}

export default PetugasKabupaten;




