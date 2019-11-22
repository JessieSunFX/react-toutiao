/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
// import BaseItem from './base-item';
import {itemFy, clickAble} from './decorators';

// export default class SinglePic extends BaseItem{
// decorators自下向上执行，等价于 itemFy(tagFy(SinglePic))
@clickAble
@itemFy
export default class SinglePic extends Component{

    static classes = 'single-pic';

    // _render() {
    render() {
        return (<div className="content">
           单图
        </div>);
    }
}