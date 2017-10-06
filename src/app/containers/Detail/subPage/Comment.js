import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import CommentList from "../../../components/CommentList/index"

import "./style.less"
import {getCommentData} from "../../../fetch/detail/detail"
import LoadMore from "../../../components/LoadMore/index"


class Comment extends React.Component {
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
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                        ? <CommentList data={this.state.data}/>
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
        const result = getCommentData(this.state.page, this.props.id);
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
        const result = getCommentData(page, this.props.id);
        this.resultHandle(result);
        this.setState({
            isLoadingMore: false,
            page: page
        })


    }
}

export default Comment