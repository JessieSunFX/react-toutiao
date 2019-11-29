import React, {Component} from 'react';

class ContentView extends Component {
    
}
export default class Detail extends Component {
    render() {
        // console.log('see what i got!', this.props);
        return (<div>我是详情页，我的id是：{this.props.match.params.id}</div>);
    }
}