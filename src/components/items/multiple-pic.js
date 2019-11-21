/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import {itemFy, clickAble} from './decorators';
@clickAble
@itemFy
export default class MultiplePic extends Component{
    render() {
        return (<div className="content">
           多图
        </div>);
    }
}