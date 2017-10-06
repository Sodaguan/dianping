import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

class UserInfo extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        const userinfo = this.props.userinfo;
        return (
            <div className="userinfo-container">
                <p>
                    <i className="icon-user"/>
                    {userinfo.username}
                </p>
                <p>
                    <i className="icon-map-marker"/>
                    {userinfo.cityName}
                </p>
            </div>
        )
    }
}

export default UserInfo

