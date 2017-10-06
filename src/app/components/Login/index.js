import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

class LoginComponent extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            phone: ""
        }
    }

    render() {
        //loginhandle
        return (
            <div id="login-container">
                <div className="input-container">
                    <i className="icon-tablet"/>
                    <input type="text"
                           placeholder="请输入手机号"
                           onChange={this.changehandle.bind(this)}/>
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"/>
                    <button>发送验证码</button>
                    <input type="text"
                           placeholder="请输入验证码"/>
                </div>
                <button className="btn-login" onClick={this.clickhandle.bind(this)}>登录</button>
            </div>
        )
    }

    changehandle(e) {
        this.setState({
            phone: e.target.value
        })
    }

    clickhandle() {
        if (!this.state.phone) {
            alert("请输入手机号");
            return
        }
        const loginhandle = this.props.loginhandle;
        loginhandle(this.state.phone)
    }
}

export default LoginComponent