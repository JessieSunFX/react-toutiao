/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';

export const itemFy = ItemComponent => {
    return class extends Component {
        render() {
            return (<div className={`item ${ItemComponent.classes}`}>
                <ItemComponent {...this.props} />
            </div>);
        }
    }
}

export const itemFy1 = hasClick => ItemComponent => {
    return class extends Component {
        render() {
            return (<div className={`item ${ItemComponent.classes}`}
             onClick={ hasClick ? this.props.onClick : () => {}}>
                <ItemComponent {...this.props}/>
            </div>);
        }
    }
}

export const clickAble = ItemComponent => {
    return class extends Component {
        render() {
            return (<div onClick={this.props.onClick}>
                <ItemComponent {...this.props}/>
            </div>);
        }
    }
}