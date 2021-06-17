import React from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from "react-router-dom";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Navbar from "../Navbar/Navbar";

const Index = () => {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/profile' exact component={Profile}/>
                <Redirect to='/'/>
            </Switch>
        </Router>
    );
};

export default Index;