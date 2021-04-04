import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

//pages
import MainPage from "./pages";
import NotFoundPage from "./pages/404"
import Admin from "./pages/admin"
import Kecurangan from "./pages/kecurangan"
import PerolehanSuara from "./pages/perolehansuara"
import Tentang from "./pages/tentang"
import Kontak from "./pages/kontak"
import Client from './Client';
import Paslon from './admin/Paslon';
import EditPaslon from './admin/EditPaslon';
import InputSuara from './admin/InputSuara';
import Report from './admin/Report';
import Lokasi from './admin/Lokasi';
import PageContent from './admin/PageContent';
import PetugasTps from './admin/PetugasTps';
import PetugasKecamatan from './admin/PetugasKecamatan';
import PetugasKabupaten from './admin/PetugasKabupaten';
import TambahPaslon from './admin/TambahPaslon';
import Tps from './admin/Tps';
import TambahTps from './admin/TambahTps';
import Login from './pages/login';
import Register from './pages/register';

class App extends Component {
  render(){
    return( 
      <Router>
        <Switch>
        <Route  exact path="/" component={MainPage} />
          <Route  path="/beranda" component={MainPage} />
          <Route  path="/kecurangan" component={Kecurangan} />
          <Route  path="/perolehansuara" component={PerolehanSuara} /> 
          <Route  path="/tentang" component={Tentang} /> 
          <Route  path="/kontak" component={Kontak} /> 
          <Route exact path="/404" component={NotFoundPage} />
          <Route path="/admin" component={Login} />
          <Route path="/paslon" component={Paslon} />
          <Route path="/tambahpaslon" component={TambahPaslon} />
          <Route path="/editpaslon" component={EditPaslon} />
          <Route path="/inputsuara" component={InputSuara} />
          <Route path="/report" component={Report} />
          <Route path="/lokasi" component={Lokasi} />
          <Route path="/halaman" component={PageContent} />
          <Route path="/petugastps" component={PetugasTps} />
          <Route path="/petugaskec" component={PetugasKecamatan} />
          <Route path="/petugaskab" component={PetugasKabupaten} />
          <Route path="/tps" component={Tps} />    
          <Route path="/tambahtps" component={TambahTps} />
          <Route path="/adminpant4u" component={Admin} />
          <Route path="/Register" component={Register} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
