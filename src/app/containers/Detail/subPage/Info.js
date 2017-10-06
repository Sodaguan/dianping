import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import {getInfoData} from "../../../fetch/detail/detail"
import DetailInfo from "../../../components/DetailInfo/index"

class Info extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            info: false
        }

    }

    render() {
        return (
            <div>
                {
                    this.state.info
                        ? <DetailInfo data={this.state.info}/>
                        : <p>loading</p>
                }
            </div>
        )
    }

    componentDidMount() {
        const result = getInfoData(this.props.id);
        result.then(res => res.json()).then(json => {
            this.setState({
                info: json
            })
        })

    }

}

export default Info
