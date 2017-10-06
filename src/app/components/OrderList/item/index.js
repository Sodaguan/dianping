import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import "./style.less"

class Item extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            commentState: 0
        }

    }

    render() {
        console.log(this.props.data);
        const data = this.props.data;
        return (
            <div className="order-item-container clear-fix">
                <div className="order-item-img fl">
                    <img src={data.img}/>
                </div>
                <div className="order-item-comment fr">
                    {
                        this.state.commentState === 0
                            ? <button className="btn" onClick={this.showComment.bind(this)}>评价 </button>
                            : this.state.commentState === 1
                            ? ""
                            : <button className="btn unselected-btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>数量：{data.count}</span>
                    <span>价格：￥{data.price}</span>
                </div>

                {
                    this.state.commentState === 1
                        ? <div className="comment-text-container">
                            <textarea className="comment-text"
                                      ref={textarea => this.textarea = textarea}/>
                            <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                            &nbsp;
                            <button className="btn unselected-btn" onClick={this.hiddenComment.bind(this)}>取消</button>
                        </div>
                        : ""
                }
            </div>

        )
    }


    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }


    showComment() {
        this.setState({
            commentState: 1
        })
    }

    hiddenComment() {
        this.setState({
            commentState: 0
        })
    }

    submitComment() {
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const value = this.textarea.value.trim();
        if (!value) {
            return
        }
        submitComment(id, value, this.pushComment.bind(this))
    }

    pushComment() {
        this.setState({
            commentState: 2
        })
    }

}

export default Item