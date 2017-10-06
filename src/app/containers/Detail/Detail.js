import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import Header from "../../components/Header/index"
import Info from "./subPage/Info"
import Comment from "./subPage/Comment"
import Buy from "./subPage/Buy"

class Detail extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        // console.log(this.props.match.params);
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={this.props.match.params.id}/>
                <Buy id={this.props.match.params.id}/>
                <Comment id={this.props.match.params.id}/>
            </div>
        )
    }
}

export default Detail