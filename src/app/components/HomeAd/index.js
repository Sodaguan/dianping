import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

class HomeAd extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        const data = this.props.data;
        console.log(data);
        return (

            <div id="home-ad">
                <h2>超值特惠</h2>
                <div className="ad-container clear-fix">
                    {data.map((item, index) => {
                        return <div key={index} className="ad-item fl">
                            <a href={item.link} target="_blank">
                                <img src={item.img} alt={item.title}/>
                            </a>
                        </div>
                    })}
                </div>
            </div>


        )
    }
}

export default HomeAd