import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import Header from "../../components/Header/index"
import UserInfo from "../../components/UserInfo/index"
import OrderList from "./subpage/OrderList"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"


class User extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div>
                <Header title="用户中心" backrouter="/"/>
                <UserInfo userinfo={this.props.userinfo}/>
                <OrderList username={this.props.userinfo.username}/>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.userinfo);
        if (!this.props.userinfo.username) {
            this.props.history.push("/login")
        }
    }
}

const mapStateToProps = state => ({
    userinfo: state.userinfo
});
const mapDispatchToProps = dispatch => ({});
export default connect(mapStateToProps, mapDispatchToProps)(User)