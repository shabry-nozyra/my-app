import React, { Component } from 'react'
import './App.css';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

//pages
import NotFoundPage from "./pages/404"
import Admin from "./pages/admin"
import Login from './pages/login';
import Register from './pages/register';
import Beranda from './pages';
import Kecurangan from './pages/kecurangan';
import PerolehanSuara from './pages/perolehansuara';
import PerolehanSuaraKecamatan from './pages/perolehansuarakecamatan';
import Tentang from './pages/tentang';
import Kontak from './pages/kontak';
import Privasi from './pages/privasi';
class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
              <Route exact path="/" component={Beranda} />
              <Route path="/beranda" component={Beranda} />
              <Route path="/perolehansuara" component={PerolehanSuara} />
              <Route exact path="/detail/:kec" component={PerolehanSuaraKecamatan} />
              <Route path="/tentang" component={Tentang} />
              <Route path="/kontak" component={Kontak} />
              <Route exact path="/admin" component={Login} />
              <Route exact path="/404" component={NotFoundPage} />
              <Route path="/adminpant4u" component={Admin} />
              <Route path="/Register" component={Register} />
              <Route path="/kecurangan" component={Kecurangan} />
              <Route path="/privasi" component={Privasi} />
              <Redirect to="/404" />
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
