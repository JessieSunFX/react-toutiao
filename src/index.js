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
    }

    render() {
        return <div className="container">
                <List 
                    dataSource = {this.state.list}
                    renderItem = {() => {

                    }}
                />
            </div>;
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);

