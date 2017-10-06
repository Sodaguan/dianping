import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"
import {withRouter} from "react-router-dom"

class Header extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickhandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>

        )
    }

    clickhandle() {
        const backrouter = this.props.backrouter;
        if (backrouter) {
            this.props.history.push(backrouter)
        }
        else {
            window.history.back()
        }
    }
}

export default withRouter(Header)