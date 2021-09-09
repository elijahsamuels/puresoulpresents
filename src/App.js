// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getAllPureSoulPresentsMusicians } from "./actions/userActions";
import { UserDetails } from "./pages/UserDetails";
import { UserList } from "./pages/UserList";
import Home from "./pages/Home";
// import UserDetails from "./pages/userDetails";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/userdetails" component={UserDetails} />
                    <Route exact path="/userlist" component={UserList} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
