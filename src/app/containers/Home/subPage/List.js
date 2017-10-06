import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"
import {getListData} from "../../../fetch/home/home"
import ListComponent from "../../../components/List/index"
import LoadMore from "../../../components/LoadMore/index"

class List extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore: false,
            data: [],
            isLoadingMore: false,//是正在加载还是点击加载更多
            page: 0

        }

    }

    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length
                        ? <ListComponent data={this.state.data}/>
                        : <p>loading</p>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                        : <p>已经到底了</p>
                }
            </div>
        )
    }

    componentDidMount() {
        this.loadFirstPageData()

    }

    loadFirstPageData() {
        const cityName = this.props.cityName;
        const result = getListData(cityName, this.state.page);
        this.resultHandle(result)

    }

    //数据处理并存储
    resultHandle(result) {
        result.then(res => res.json()).then(json => {
            console.log(json);
            this.setState({
                hasMore: json.hasMore,
                data: this.state.data.concat(json.data)
            })
        })

    }

    loadMoreData() {
        this.setState({
            isLoadingMore: true
        });
        const page = this.state.page + 1;
        const cityName = this.props.cityName;
        const result = getListData(cityName, page);
        this.resultHandle(result);
        this.setState({
            isLoadingMore: false,
            page: page
        })


    }
}

export default List
