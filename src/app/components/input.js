import React, {Component} from "react";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            value: ""
        }
    }

    render() {
        return (
            <input type="text"
                   value={this.state.value}
                   onChange={this.changehandle.bind(this)}
                   onKeyUp={this.keyUphandle.bind(this)}/>
        )
    }

    changehandle(e) {
        this.setState({
            value: e.target.value
        })
    }

    keyUphandle(e) {
        const value = this.state.value;
        if (e.keyCode === 13 && value.trim()) {
            this.props.submitFn(value);
            this.setState({
                value: ""
            })
        }
    }
}

export default Input;