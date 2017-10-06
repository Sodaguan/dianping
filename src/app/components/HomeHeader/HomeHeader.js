import React from "react";
import PureRenderMixin from "react-addons-pure-render-mixin"
import "./homeheader.less"

import {Link, withRouter} from "react-router-dom"

import SearchInput from "../../components/SearchInput/index"


class HomeHeader extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div id="home-header">
                <div className="home-header-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"/>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <SearchInput keyword="123" enterHandle={this.enterHandle.bind(this)}/>
                </div>
                <div className="home-header-right">
                    <Link to="/login">
                        <i className="icon-user"/>
                    </Link>
                </div>
            </div>
        )
    }

    enterHandle(keyword) {
        // console.log(keyword);
        console.log(this.props.history);
        this.props.history.push("/search/all/" + encodeURIComponent(keyword))
    }


}

export default withRouter(HomeHeader)