import React from 'react'
import PaslonComponent from '../components/Paslon/PaslonComponent';
import {
    BrowserRouter as Router,
    Route,
    Switch  
} from "react-router-dom";
import TambahPaslon from './Paslon/TambahPaslon';
import { connect } from 'react-redux';
import DetailPaslon from './Paslon/DetailPaslon';
import EditPaslon from './Paslon/EditPaslon';


const mapStateToProps = (state) => {
    return {
        getPaslonList: state.paslons.getPaslonList,
        errorPaslon: state.paslons.errorPaslon
    }
}
class Paslon extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="p-2">
                    <Router>
                        <Switch>
                            <Route exact path="/adminpant4u/paslon" component={PaslonComponent} />
                            {/* <Route path="/adminpant4u/detailpaslon/:id" component={DetailPaslon} /> */}
                            <Route path="/adminpant4u/paslon/tambah" component={TambahPaslon} />
                            <Route path="/adminpant4u/editpaslon/:id" component={EditPaslon} />
                            <Route path="/adminpant4u/detailpaslon/:id" component={DetailPaslon} />
                        </Switch>
                    </Router>

                </div>
            </div>
        )
    }
}
export  default connect(mapStateToProps, null)(Paslon);
