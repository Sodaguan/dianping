import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"


class LoadMore extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div className="load-more" ref={div => this.div = div}>
                {this.props.isLoadingMore
                    ? <p>loading</p>
                    : <p onClick={this.props.loadMoreFn}>加载更多</p>}
            </div>
        )
    }

    componentDidMount() {
        const divDom = this.div;
        const loadMoreFn = this.props.loadMoreFn;

        //函数节流
        let timeoutId;

        const callback = () => {
            //滚动加载
            const top = divDom.getBoundingClientRect().top;
            console.log(top);
            const windowScreenHeight = window.screen.height;
            console.log(windowScreenHeight);
            if (top && top < windowScreenHeight) {
                loadMoreFn()
            }
        }

        window.addEventListener("scroll", function () {
            if (this.props.isLoadingMore) {
                return
            }
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback, 50)
        }.bind(this), false)
    }
}

export default LoadMore