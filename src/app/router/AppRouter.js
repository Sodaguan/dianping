import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import {Router, Route, Switch} from "react-router-dom"

import App from "../containers/App"
import Home from "../containers/Home/Home"
import City from "../containers/City/City"
import Login from "../containers/Login/Login"
import User from "../containers/User/User"
import Search from "../containers/Search/Search"
import Detail from "../containers/Detail/Detail"
import NotFound from "../containers/NotFound"


import createBrowserHistory from 'history/createBrowserHistory';

class AppRouter extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            //
            <Router history={createBrowserHistory()}>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/city" component={City}/>
                        <Route path="/login/:router?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/search/:category/:keyword?" component={Search}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route component={NotFound}/>
                    </Switch>
                </App>
            </Router>
        )
    }
}

export default AppRouter;
