import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import {bindActionCreators} from "redux"
import {connect} from "react-redux"
import * as userinfoActions from "../../actions/userinfo"

import Header from "../../components/Header/index"
import CurrentCity from "../../components/CurrentCity/index"
import CityList from "../../components/CityList/index"

import localStorage from "../../util/localStorage"
import CITYNAME from "../../config/localStorageKey";


class City extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeCity={this.changeCity.bind(this)}/>

            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.userinfo);
        console.log(this.props.userinfoActions);
    }

    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        //修改redux
        const userinfo = this.props.userinfo;
        userinfo.cityName = newCity;
        this.props.userinfoActions.update(userinfo);
        //修改localstorage
        localStorage.setItem(CITYNAME, newCity);
        //跳转首页
        console.log(this.props.history);
        this.props.history.push("/")
    }

}

const mapStateToProps = (state) => ({
    userinfo: state.userinfo
});
const mapDispatchToProps = (dispatch) => ({
    userinfoActions: bindActionCreators(userinfoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(City)

