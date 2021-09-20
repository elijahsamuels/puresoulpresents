// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { getAllPureSoulPresentsMusicians } from "./actions/userActions";
import { UserDetails } from "./pages/UserDetails";
import { UserList } from "./pages/UserList";
import { Contact } from "./pages/Contact";
import { Test } from "./pages/Test";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/userdetails" component={UserDetails} />
                    <Route exact path="/userlist" component={UserList} />
                    <Route exact path="/contact" component={Contact} />
                    {/* <Route exact path="/test" component={Test} /> */}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
