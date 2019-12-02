import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from './fake-router';

class Main extends Component {
    render() {
        console.log('index-props::::', this.props);
        return <div onClick={this.skip.bind(this)}>
                我是首页
                <Link to="/detail/i999887">跳转</Link>
            </div>;
    }

    skip() {
        this.props.history.push('/detail/i999999');
    }
}

class Detail extends Component {
    render() {
        console.log('detail-props:::', this.props);
        return <div>我是详情页</div>;
    }
}

class AppContainer extends Component {
    render() {
        return (<BrowserRouter>
                    <Route path="/home" component={Main} />
                    <Route path="/detail" component={Detail} />
            </BrowserRouter>);
    }
};

ReactDOM.render(
    <AppContainer />,
    document.getElementById('app')
);
