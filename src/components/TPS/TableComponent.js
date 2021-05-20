import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {connect} from 'react-redux';
import { deleteTPS } from '../../Actions/UserActions';
import swal from "sweetalert";


const handleClick = (dispatch, id) => {
  
    console.log("id ="+ id);
    swal({
      title: "Apakah Anda yakin akan menghapus data ini ?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        dispatch(deleteTPS(id))
        swal("Data TPS Sukses dihapus", {
          icon: "success",
        });
        window.location.href = "/adminpant4u/tps";
      } else {
        swal("Data gagal dihapus");
      }
    });
  }

const { SearchBar } = Search;


const defaultSorted = [
    {
      dataField: "id",
      order: "desc",
    },
  ];

  const mapStateToProps = (state) => {
    return{
        getTpsList: state.tpss.getTpsList,
        errorTps: state.tpss.errorTps
    }
}
const tablecomponent = (props) => {
    const columns = [{
        dataField: 'no_tps',
        text: 'No TPS',
        headerStyle: () => {
            return { width: "10%", align: "center"  };
        },
        sort: true //menambahkan fungsi sort
    }, {
        dataField: 'lokasi',
        text: 'Lokasi',
        sort: true //menambahkan fungsi sort
    },{
        dataField: 'nagari',
        text: 'Nagari',
        sort: true //menambahkan fungsi sort
    }, {
        dataField: 'kecamatan',
        text: 'Kecamatan',
        sort: true //menambahkan fungsi sort
    },
    {
        dataField: 'jpl',
        text: 'JPL',
        sort: true //menambahkan fungsi sort
    }, {
        dataField: "link",
        text: "Action",
        formatter: (rowContent, row) => {
            return (
                <div>
                    <Link to={"/adminpant4u/detailtps/"+row.id}>
                        <Button color="dark" className="m-2 btn-sm">
                            <FontAwesomeIcon icon={faInfo} /> Detail
                        </Button>
                    </Link>
                     <Link to={"/adminpant4u/edittps/"+row.id}>
                        <Button color="dark" className="m-2 btn-sm">
                            <FontAwesomeIcon icon={faEdit} /> Edit
                        </Button>
                        </Link>
                        <Button color="dark" className="m-2 btn-sm" onClick={() => handleClick(props.dispatch, row.id)}>
                            <FontAwesomeIcon icon={faTrash} /> Delete
                        </Button>
                </div>
            );
        }
    }
    ];
    
  
    return (
        <div>
            { props.getTpsList ?  <ToolkitProvider
            bootstrap4
            keyField='id'
            data={props.getTpsList}
            columns={columns}
            defaultSorted={defaultSorted}
            search>
            {props => (
                <div>

                    <div className="float-right"> <SearchBar {...props.searchProps} placeholder="Search" /></div>
                    <BootstrapTable
                        {...props.baseProps} pagination={paginationFactory()}
                    />
                </div>
            )
            }
            </ToolkitProvider> : <div>no data</div> }

           
        </div>
    )
}

export default connect(mapStateToProps, null)(tablecomponent);
