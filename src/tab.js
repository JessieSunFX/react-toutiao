/**
 * @file entry file
 * @author jessie
 */

import React, {Component, Suspense} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';

const SettingComponent = React.lazy(() => import('./setting'));

export default class Tab extends Component{

    constructor(...args) {
        super(...args);
        this.state = {
            showSetting: false
        };
    }

    render() {
        const {dataSource = [], renderItem} = this.props;
        return (<div>
            {
                this.props.tabs.map(tab => {
                    return <span>{tab.name}</span>
                })
            }
            {/* <span onClick={this.onShowMore.bind(this)}>+</span> */}
            <Link to="/home/setting">+</Link>
            <Route path="/home/setting" render={props => {
                return <Suspense fallback={<div>Loading...</div>}>
                        <SettingComponent />
                    </Suspense>
            }}/>
            {/* {
                this.state.showSetting
                ?   <Suspense fallback={<div>Loading...</div>}>
                        <SettingComponent />
                    </Suspense>
                : null
            } */}
                
        </div>);
    }   

    onShowMore() {
        this.setState({
            showSetting: true
        });
    }
}