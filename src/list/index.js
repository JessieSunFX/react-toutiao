/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';

export default class List extends Component{
    render() {
        console.log('props::', this.props);
        return (<div>列表</div>);
    }
}