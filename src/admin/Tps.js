import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import {
    BrowserRouter as Router,
    Route,
    Switch  
} from "react-router-dom";
import { connect } from 'react-redux';
import { getTpssList, deleteDataTPS } from '../Actions/UserActions';
import DetailTps from './Tps/DetailTps';
import TpsComponent from '../components/TPS/TpsComponent';
import EditTps from './Tps/EditTps';
import TambahTps from './Tps/TambahTps';

const mapStateToProps = (state) => {
    return {
        getTpsList: state.tpss.getTpsList,
        errorTps: state.tpss.errorTps
    }
}
class Tps extends React.Component {
    componentDidMount() {
        this.props.dispatch(getTpssList());
        this.props.dispatch(deleteDataTPS())
    }
    render() {
        return (
            
            <div className="container-fluid">
                  <Router>
                <Switch>
                    <Route exact path="/adminpant4u/tps" component={TpsComponent} />
                    <Route path="/adminpant4u/detailtps/:id" component={DetailTps} />
                    <Route path="/adminpant4u/edittps/:id" component={EditTps} />
                    <Route path="/adminpant4u/tps/add" component={TambahTps} />
                </Switch>
                </Router>
            </div>
            
        )
    }
}

export default connect(mapStateToProps, null)(Tps);




