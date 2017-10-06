import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

class BuyandStore extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container fl">
                    {
                        // 是否已经收藏了
                        this.props.isStore
                            ? <button className="selected" onClick={this.storehandle.bind(this)}>已收藏</button>
                            : <button onClick={this.storehandle.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-container fr">
                    <button onClick={this.buyhandle.bind(this)}>购买</button>
                </div>
            </div>
        )
    }

    storehandle() {
        this.props.storehandle()
    }

    buyhandle() {
        this.props.buyhandle()
    }
}

export default BuyandStore