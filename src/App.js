import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import Paslon from "./Paslon";
  import Laporan from "./Laporan";
  import Home from "./Home";
  import Tps from "./Tps";
  import Sidebar from "./Sidebar";
import { Navbar } from './Navbar';
import InputSuara from './InputSuara';
import Report from './Report';
import TambahPaslon from './TambahPaslon';
import TambahTps from './TambahTps';
import PetugasTps from './PetugasTps';
import PetugasKecamatan from './PetugasKecamatan';
import PetugasKabupaten from './PetugasKabupaten';
import Lokasi from './Lokasi';
import PageContent from './PageContent';
import EditPaslon from './EditPaslon';
  export default function BasicExample() {
      return (
        <Router>
              <div id="wrapper">
             <Sidebar />
             <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Navbar />
                    <div className="container-fluid">
                    <Switch>
                        <Route exact path="/">
                        <Home />
                        </Route>
                        <Route path="/paslon">
                        <Paslon />
                        </Route>
                        <Route path="/laporan">
                        <Laporan />
                        </Route>
                        <Route path="/Tps">
                        <Tps />
                        </Route>
                        <Route path="/Inputsuara">
                        <InputSuara />
                        </Route>
                        <Route path="/Report">
                        <Report />
                        </Route>
                        <Route path="/TambahPaslon">
                        <TambahPaslon />
                        </Route>
                        <Route path="/TambahTps">
                        <TambahTps />
                        </Route>
                        <Route path="/PetugasTps">
                        <PetugasTps />
                        </Route>
                        <Route path="/PetugasKec">
                        <PetugasKecamatan />
                        </Route>
                        <Route path="/PetugasKab">
                        <PetugasKabupaten />
                        </Route>
                        <Route path="/Lokasi">
                        <Lokasi />
                        </Route>
                        <Route path="/halaman">
                        <PageContent />
                        </Route>
                        <Route path="/editpaslon">
                        <EditPaslon />
                        </Route>
                        {/* <Route path="/TambahPetugasTps">
                        <TambahPetugasTps />
                        </Route> */}
                    </Switch>
                    </div>
                </div>
            </div>
            </div>
        </Router>
      );
  }