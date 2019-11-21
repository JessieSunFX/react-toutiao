/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';

export const itemFy = ItemComponent => {
    return class extends Component {
        render() {
            return (<div className="item">
                <ItemComponent />
            </div>);
        }
    }
}

export const clickAble = ItemComponent => {
    return class extends Component {
        render() {
            return (<div onClick={this.props.onClick}>
                <ItemComponent />
            </div>);
        }
    }
}