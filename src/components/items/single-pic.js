/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import BaseItem from './base-item';

export default class SinglePic extends BaseItem{
    _render() {
        return (<div className="item">
           单图
        </div>);
    }
}