import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import getSearchData from "../../../fetch/search/search"
import ListComponent from "../../../components/List/index"
import LoadMore from "../../../components/LoadMore/index"

import {connect} from "react-redux"

class SearchList extends React.Component {

    constructor() {

        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hasMore: false,
            data: [],
            isLoadingMore: false,//是正在加载还是点击加载更多
            page: 0//下一页的页码

        }

    }

    render() {
        return (
            <div>
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
        console.log(123);
        this.loadFirstPageData()
    }

    loadFirstPageData() {
        console.log(this.props);
        console.log(this.state);
        const page = this.state.page;
        const cityName = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword;
        const result = getSearchData(page, cityName, category, keyword);
        console.log(result);
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
        const cityName = this.props.userinfo.cityName;
        const category = this.props.category;
        const keyword = this.props.keyword;
        const result = getSearchData(page, cityName, category, keyword);
        this.resultHandle(result);
        this.setState({
            isLoadingMore: false,
            page: page
        })


    }

    componentDidUpdate(prevProps, prevState) {
        console.log(456);
        const category = this.props.category;
        const keyword = this.props.keyword;
        if (category === prevProps.category && keyword === prevProps.keyword) {
            return
        }
        //重置状态
        this.setState({
            hasMore: false,
            data: [],
            isLoadingMore: false,//是正在加载还是点击加载更多
            page: 0//下一页的页码

        })
        //重新加载首页
        this.loadFirstPageData()
    }

}


const mapStateToProps = (state) => ({
    userinfo: state.userinfo
});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchList)


