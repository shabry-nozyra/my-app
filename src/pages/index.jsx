import React from 'react'
import '../index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import NavbarComponent from '../components/NavbarComponent';
import Footer from '../components/footer';
import BerandaComponent from '../components/BerandaComponent';



class MainPage extends React.Component {

    render() {
        return (
            <Router>
                <div className="">
                    <NavbarComponent />
                    <Switch>
                         <Route  path="/" component={BerandaComponent} />
                        <Route exact path="/beranda/" component={BerandaComponent} />
                    </Switch>
                    <Footer />
                </div >
            </Router>
        );
    }
}

export default MainPage;