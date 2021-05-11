import React from 'react'
import DropdownComponent from '../DropdownComponent';
import { Table } from 'reactstrap';

class LokasiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lokasis: [] };
  }
  componentDidMount() {
    fetch('https://pantauapp.azurewebsites.net/lokasi')
      .then(response => {
        return response.json();
      }).then(result => {
        this.setState({
          lokasis: result
        });
      });
  }


  render() {
    return (
      <div className="p-2">
        <h2>Lokasi</h2>
        <hr></hr>
        <div className="text-right p-3">
          <a className="btn btn-primary" href="/adminpant4u/lokasi/addlokasi">Tambah Lokasi Baru</a>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card p-3 shadow-sign border-0 mt-3">
              <DropdownComponent />
            </div>
            <div>
              <Table striped>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Jorong</th>
                    <th>Nagari</th>
                    <th>Kecamatan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                {
                                this.state.lokasis.map(function (item, key) {
                                    return (
                  <tr>
                    <td>{key+1}</td>
                    <td></td>
                    <td>{item.nama_nagari}</td>
                    <td>{item.nama_kecamatan}</td>
                    <td><a className="btn btn-danger btn-sm mr-2">delete</a><a className="btn btn-warning btn-sm">edit</a></td>
                  </tr>
                     )
                    })
                }
                </tbody>
              </Table>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LokasiComponent;
