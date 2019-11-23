/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
// import BaseItem from '../base-item';
import {itemFy, clickAble} from '../decorators';
import style from './style.css';

// export default class SinglePic extends BaseItem{
// decorators自下向上执行，等价于 itemFy(tagFy(SinglePic))
@clickAble
@itemFy
export default class SinglePic extends Component{

    static classes = 'single-pic';

    // _render() {
    render() {
        const {title, imageList} = this.props.data;

        return (<React.Fragment>
            <h3>{title}</h3>
            <img src={imageList[0]} />
        </React.Fragment>);
    }
}