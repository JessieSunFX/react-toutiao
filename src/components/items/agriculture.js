/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import {itemFy} from './decorators';

@itemFy
export default class Agriculture extends Component{
    render() {
        return (<div className="content">
           农业
        </div>);
    }
}