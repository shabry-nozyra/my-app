import React from "react";
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
import Sidebar from "./Sidebar";
export default function BasicExample() {
    return (
      <Router>
          <div className="container-fluid p-0">
              <div className="row m-0">
                <div className="col-3 p-0">
                  <Sidebar />
                </div>
                <div className="col-9 pt-5 mt-5">
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
                </Switch>
              </div>
              </div>
          </div>

      </Router>
    );
}

