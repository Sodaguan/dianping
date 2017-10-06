import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"
import Item from "./item/index"

class CommentList extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        const data = this.props.data;
        return (
            <div className="comment-list">
                {
                    data.map((item, index) => {
                        return <Item key={index} data={item}/>
                    })
                }
            </div>
        )
    }
}

export default CommentList