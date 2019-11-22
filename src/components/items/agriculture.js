/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import {itemFy, itemFy1} from './decorators';

// @itemFy
@itemFy1()
export default class Agriculture extends Component{

    static classes = 'agriculture';

    render() {
        return (<div className="content">
           农业
        </div>);
    }
}