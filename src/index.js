/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './list';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.getList()
            .then(({data}) => {
                this.setState({
                    list: data
                });
            })
    }

    getList() {
        return fetch('http://localhost:9000/list')
            .then(res => res.json());
    }

    render() {
        return <div className="container">
                <List 
                    dataSource = {this.state.list}
                    renderItem = {item => {
                        console.log('item::::',item);
                    }}
                />
            </div>;
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);

