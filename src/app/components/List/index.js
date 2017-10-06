import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import "./style.less"

import Item from "./item/index"

class ListComponent extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        console.log(this.props);
        const data = this.props.data;
        return (
            <div>
                {data.map((item, index) => {
                    return <Item key={index} data={item}/>
                })}
            </div>
        )
    }
}

export default ListComponent