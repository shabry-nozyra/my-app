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

class Client extends Component {
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
          <Route path="/admin" component={Admin} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default Client;
