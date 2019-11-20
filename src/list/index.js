/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';

export default class List extends Component{
    render() {
        const {dataSource = [], renderItem} = this.props;
        return (<div>
            {
                dataSource.map(renderItem)
            }
        </div>);
    }
}