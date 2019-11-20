/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import * as components from './components/items';

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
                        const type = item.type.replace(/^\w/, code => code.toUpperCase());
                        const ItemComponent = components[type];
                        return <ItemComponent />;
                    }}
                />
            </div>;
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);

