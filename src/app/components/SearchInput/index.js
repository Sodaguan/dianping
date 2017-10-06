import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

class SearchInput extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            keyword: ""
        }
    }

    render() {
        return (
            <div className="search-container">
                <i className="icon-search"></i>
                <input type="text" placeholder="请输入关键字"
                       value={this.state.keyword}
                       onChange={this.changehandle.bind(this)}
                       onKeyUp={this.keyuphandle.bind(this)}/>
            </div>
        )
    }

    changehandle(e) {
        // console.log(e.target.value);
        this.setState({
            keyword: e.target.value
        });
    }

    keyuphandle(e) {
        // console.log(e.keyCode);
        if (e.keyCode === 13) {
            // console.log(this.state.keyword);
            this.props.enterHandle(this.state.keyword)
        }

    }

    componentDidMount() {
        this.setState({
            keyword: this.props.keyword
        })
    }
}

export default SearchInput