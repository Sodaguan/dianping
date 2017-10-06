import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

class CityList extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div className="city-list-container">
                <h3>城市列表</h3>
                <ul className="clear-fix">
                    <li onClick={this.clickhandle.bind(this, "北京")}><span>北京</span></li>
                    <li onClick={this.clickhandle.bind(this, "上海")}><span>上海</span></li>
                    <li onClick={this.clickhandle.bind(this, "杭州")}><span>杭州</span></li>
                </ul>
            </div>
        )
    }

    clickhandle(newCity) {
        console.log(newCity);
        const changeCity = this.props.changeCity;
        changeCity(newCity)
    }
}

export default CityList