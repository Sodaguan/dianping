import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"

import SearchHeader from "../../components/SearchHeader/index"
import SearchList from "./subpage/List"
import SearchInput from "../../components/SearchInput/index";

class Search extends React.Component {
    constructor() {
        super();
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }

    render() {
        return (
            <div>
                <SearchHeader keyword={this.props.match.params.keyword}/>
                <SearchList category={this.props.match.params.category} keyword={this.props.match.params.keyword}/>
            </div>
        )
    }

    componentDidMount() {
        console.log(this.props.match.params);
    }
}

export default Search