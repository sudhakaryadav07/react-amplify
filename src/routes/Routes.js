import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { HomeScreen, ContactUsScreen, BlogScreen } from '../screen';

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

class PublicRoutes extends Component {

    renderRoutes() {
        return (
            <Switch>
                <Route exact path="/" component={HomeScreen} />
                <Route exact path="/blog" component={BlogScreen} />
                <Route exact path="/contact-us" component={ContactUsScreen} />
            </Switch>
        );
    }

    render() {
        this.props.history.pushState(null, null, '/');
        window.onpopstate = function (event) {
            history.go(1);
        };
        return (
            <Router history={history}>
                {this.renderRoutes()}
            </Router>
        )
    }
}

export default PublicRoutes;