import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as userinfoActions from "../../actions/userinfo"

import {withRouter} from "react-router-dom"

import Header from "../../components/Header/index"
import LoginComponent from "../../components/Login/index"

class Login extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            checking: false
        }
    }

    render() {
        return (
            <div>
                <Header title="登录" backrouter="/"/>
                {
                    this.state.checking
                        ? <div>已登录</div>
                        : <LoginComponent loginhandle={this.loginhandle.bind(this)}/>
                }
            </div>
        )
    }

    componentDidMount() {
        this.doCheck()
    }

    doCheck() {
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            //已登录
            this.goUserPage()
        } else {
            //未登录
            this.setState({
                checking: false
            })
        }
    }

    goUserPage() {
        this.props.history.push("/user")
    }


    loginhandle(username) {
        //保存用户名
        const actions = this.props.userinfoActions;
        let userinfo = this.props.userinfo;
        userinfo.username = username;
        actions.update(userinfo);

        //跳转链接
        const router = decodeURIComponent(this.props.match.params.router);

        if (this.props.match.params.router) {
            this.props.history.push(router)
        } else {
            this.goUserPage()
        }

    }

}

const mapStateToProps = (state) => ({
    userinfo: state.userinfo
})

const mapDispatchToProps = (dispacth) => ({
    userinfoActions: bindActionCreators(userinfoActions, dispacth)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))