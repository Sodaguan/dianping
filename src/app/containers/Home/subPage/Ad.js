import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import {getAdData} from "../../../fetch/home/home"

import HomeAd from "../../../components/HomeAd/index"

class Ad extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ? <HomeAd data={this.state.data}/>
                        : <div>loading</div>
                }
            </div>
        )
    }

    componentDidMount() {
        const result = getAdData();
        result.then(res => res.json())
            .then(json => {
                if (json) {
                    this.setState({
                        data: json
                    })
                    console.log(this.state.data);
                }

            })
    }
}

export default Ad