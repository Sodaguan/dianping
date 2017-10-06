import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import * as storeActions from "../../../actions/store"

import {withRouter} from "react-router-dom"

import BuyandStore from "../../../components/BuyandStore/index"

class Buy extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore: false
        }
    }

    render() {
        return (
            <div>
                <BuyandStore isStore={this.state.isStore}
                             buyhandle={this.buyhandle.bind(this)}
                             storehandle={this.storehandle.bind(this)}/>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.store);
        console.log(this.props.storeActions);
        this.checkStoreState()
    }

    checkStoreState() {
        const id = this.props.id;
        const store = this.props.store;

        store.some(item => {
            if (item.id === id) {
                this.setState({
                    isStore: true
                })
                return true
            }
            else {

            }
        })

    }

    buyhandle() {
        //验证登陆，没登录返回
        const loginflag = this.logincheck();
        if (!loginflag) {
            return
        }
        //购买功能

        //跳转链接
        this.props.history.push("/user")
    }

    storehandle() {
        const loginflag = this.logincheck();
        if (!loginflag) {
            return
        }
        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if (this.state.isStore) {
            storeActions.rm({id: id})
        } else {
            storeActions.add({id: id})
        }
        this.setState({
            isStore: !this.state.isStore
        })

    }

    logincheck() {
        const id = this.props.id;
        const userinfo = this.props.userinfo;
        if (userinfo.username) {
            return true
        } else {
            this.props.history.push("/login/" + encodeURIComponent("/detail/" + id));
            return false
        }

    }

}

const mapStateToProps = state => ({
    //这个state后面的点名字是reducer中返回的函数名
    userinfo: state.userinfo,
    store: state.store
});
const mapDispatchToProps = dispatch => ({
    storeActions: bindActionCreators(storeActions, dispatch)
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Buy))