/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import style from './setting.css';
import TabContext from './tab-context';

export default class Setting extends Component{

    static contextType = TabContext;

    render() {
        // console.log('allTab::::', this.context);
        return (<div className="setting">
           {this.context.map(tab => {
               return <li>{tab.name}</li>;
           })}
        </div>);
    }
}