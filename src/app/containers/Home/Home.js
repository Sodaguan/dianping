import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import {connect} from "react-redux"
import {withRouter} from "react-router-dom"


import HomeHeader from "../../components/HomeHeader/HomeHeader"
import Category from "../../components/Category/index"
import Ad from "./subPage/Ad"
import List from "./subPage/List"


class Home extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        // console.log(this.props);

        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <Ad/>
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    userinfo: state.userinfo
});
const mapDispatchToProps = (dispatch) => ({});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
