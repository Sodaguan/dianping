import React from 'react';
import localStorage from "../util/localStorage"
import CITYNAME from "../config/localStorageKey"

import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as userinfoActions from "../actions/userinfo"

import {withRouter} from "react-router-dom"

import PureRenderMixin from "react-addons-pure-render-mixin"


class App extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false,
            test: "hello react"
        }
    }

    render() {
        return (
            <div>
                {this.state.initDone ?
                    this.props.children :
                    <p>loading</p>}
            </div>


        );
    }



    componentDidMount() {
        let cityName = localStorage.getItem(CITYNAME);
        if (cityName == null) {
            cityName = "北京";
        }
        console.log(this.props);
        this.props.userinfoActions.update({
            cityName: cityName
        });
        console.log(cityName);

        this.setState({
            initDone: true
        })
    }


}


const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))