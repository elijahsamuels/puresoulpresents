// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getAllPureSoulPresentsMusicians } from "./actions/userActions";
import { UserDetails } from "./pages/userDetails";
import Home from "./pages/Home";
// import UserDetails from "./pages/userDetails";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/userdetails" component={UserDetails} />

                    <UserDetails />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
