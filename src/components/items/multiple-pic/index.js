/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import {itemFy, clickAble, itemFy1} from '../decorators';
import style from './style.css';

@clickAble
@itemFy
// @itemFy1(true)
export default class MultiplePic extends Component{

    static classes = 'multiple-pic';

    render() {
        const {title, imageList} = this.props.data;

        const imageComponent = imageList.map(image => (<img src={image} />));

        return (<React.Fragment>
           <h3>{title}</h3>
           {imageComponent}
        </React.Fragment>);
    }
}