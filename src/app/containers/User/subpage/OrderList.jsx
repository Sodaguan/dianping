import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

import {getOrderListData, postComment} from "../../../fetch/user/orderlist"
import OrderListComponent from "../../../components/OrderList/index"

class OrderList extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                        ? <OrderListComponent data={this.state.data} submitComment={this.submitComment.bind(this)}/>
                        : <p>loading</p>

                }

            </div>
        )
    }

    componentDidMount() {
        const result = getOrderListData(this.props.username)
        result.then(res => res.json()).then(json => {
            this.setState({
                data: json
            })
        })
    }

    //提交评论
    submitComment(id, value, callback) {
        const result = postComment(id, value)
        result.then(res => res.json()).then(json => {
            console.log(json);
            if (json.errno === 0) {
                callback()
            }
        })
    }

}

export default OrderList