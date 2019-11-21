/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import {itemFy} from './decorators';

class Agriculture extends Component{
    render() {
        return (<div className="item">
           农业
        </div>);
    }
}

export default itemFy(Agriculture);