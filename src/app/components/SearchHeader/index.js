import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

import SearchInput from "../SearchInput/index"

import {withRouter} from "react-router-dom"

class SearchHeader extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div id="search-header">
                <span className="back-icon" onClick={this.clickhandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <SearchInput keyword={this.props.keyword} enterHandle={this.enterHandle.bind(this)}/>
            </div>
        )
    }

    clickhandle() {
        window.history.back()
    }

    enterHandle(keyword) {
        // console.log(keyword);
        // console.log(this.props.history);
        this.props.history.push("/search/all/" + encodeURIComponent(keyword))
    }
}

export default withRouter(SearchHeader)