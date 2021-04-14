import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from '../admin/Home';
import { NavbarAdmin } from '../components/NavbarAdmin';
import Sidebar from "../components/Sidebar";
import Tps from '../admin/Tps';
import Paslon from '../admin/Paslon';
import InputSuara from '../admin/InputSuara';
import report from '../admin/Report';
import Petugaskec from '../admin/PetugasKecamatan';
import Petugaskab from '../admin/PetugasKabupaten';
import Petugastps from '../admin/PetugasTps';
import Halaman from '../admin/PageContent';
import Lokasi from '../admin/Lokasi';

const Admin = () => {
    return (
        <Router>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <NavbarAdmin />
                        <div className="container-fluid">
                        <Switch>
                            <Route  exact path="/adminpant4u/" component={Home} />
                            <Route  path="/adminpant4u/paslon" component={Paslon} />
                            <Route  path="/adminpant4u/tps" component={Tps} />
                            <Route  path="/adminpant4u/inputsuara" component={InputSuara} />
                            <Route  path="/adminpant4u/report" component={report} />
                            <Route  path="/adminpant4u/petugastps" component={Petugastps} />
                            <Route  path="/adminpant4u/petugaskec" component={Petugaskec} />
                            <Route  path="/adminpant4u/petugaskab" component={Petugaskec} />
                            <Route  path="/adminpant4u/lokasi" component={Lokasi} />
                            <Route  path="/adminpant4u/halaman" component={Halaman} />

                            
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default Admin;