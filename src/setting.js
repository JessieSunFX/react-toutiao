/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import style from './setting.css';

export default class Setting extends Component{
    render() {
        console.log('allTab::::', this.props.allTab);
        return (<div className="setting">
           {this.props.allTab.map(tab => {
               return <li>{tab.name}</li>;
           })}
        </div>);
    }
}