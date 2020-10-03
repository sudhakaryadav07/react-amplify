import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { HomeScreen, BlogScreen } from '../screen';

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

class PublicRoutes extends Component {

    renderRoutes() {
        window.onpopstate = function (event) { history.go(1); };
        return (
            <Switch>
                <Route exact path="/home" component={HomeScreen} />
                <Route exact path="/blog" component={BlogScreen} />
            </Switch>
        );
    }

    render() {
        return (
            <Router history={history}>
                { this.renderRoutes()}
            </Router>
        )
    }
}

export default PublicRoutes;