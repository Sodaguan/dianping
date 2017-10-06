import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"


class NotFound extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div>404</div>
        )
    }
}

export default NotFound