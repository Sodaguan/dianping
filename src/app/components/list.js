import React, {Component} from "react"

class List extends Component {
    render() {
        let list = this.props.todos;
        console.log(list);
        return (
            <ul>
                {list.map(
                    (item, index) =>
                        <li key={index} onClick={this.clickhandle.bind(this, item.id)}>{item.text}</li>
                )}
            </ul>
        )
    }

    clickhandle(id) {

        this.props.deleteFn(id)
    }
}

export default List