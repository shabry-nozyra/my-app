import React from 'react';
import LokasiComponent from '../components/Lokasi/LokasiComponent';
import {
  BrowserRouter as Router,
  Route,
  Switch  
} from "react-router-dom";
class Lokasi extends React.Component {
  render() {
    return (
      <div className="p-2">
        <h2>Pengaturan Lokasi</h2>
        <hr></hr>
        <div class="row">
          <div class="col-12">
            <div class="card p-3 shadow-sign border-0 mt-3">
            <div className="container-fluid">
                  <Router>
                <Switch>
                    <Route exact path="/adminpant4u/lokasi" component={LokasiComponent} />
                    {/* <Route path="/adminpant4u/lokasi/kecamatan" component={TambahTps} />
                    <Route path="/adminpant4u/lokasi/jorong" component={TambahTps} />
                    <Route path="/adminpant4u/lokasi/nagari" component={TambahTps} /> */}
                </Switch>
                </Router>
            </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Lokasi;




