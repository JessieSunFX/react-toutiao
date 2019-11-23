/**
 * @file entry file
 * @author jessie
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './list';
import Tab from './tab';
import * as components from './components/items';
import TabContext from './tab-context';

// class Lazy extends Component{
//     render() {
//         return <div>lazy</div>;
//     }
// }

// const SettingComponent = React.lazy(() => {
//     return import('./setting')
//         .then(Component => {
//             console.log('in-setting-component:', Component);
//             // return new Promise((resolve) => {
//             //     setTimeout(() => {
//             //         return resolve({
//             //             default: Lazy
//             //         });
//             //     }, 1000);
//             // });
//             return new Promise((resolve) => {
//                 setTimeout(() => {
//                     return resolve();
//                 }, 1000);
//             });
//             // return Component;
//         });
// });

const TABS = [
    {
        id: '__all__',
        name: '推荐'
    },
    {
        id: 'video',
        name: '视频'
    }
];

const ALL_TAB = [
    {
        id: '__all__',
        name: '推荐'
    },
    {
        id: 'video',
        name: '视频'
    },
    {
        id: 'sport',
        name: '体育'
    },
    {
        id: 'history',
        name: '历史'
    }
];

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            showSetting: false
        };
        this.getList()
            .then(({data}) => {
                this.setState({
                    list: data
                });
            })
    }

    getList() {
        return fetch('http://localhost:9000/list')
            .then(res => res.json());
    }

    render() {
        return <div className="container">
                <TabContext.Provider value={ALL_TAB}>
                    <Tab tabs={TABS}></Tab>
                    <List 
                        dataSource = {this.state.list}
                        renderItem = {item => {
                            const type = item.type.replace(/^\w/, code => code.toUpperCase());
                            const ItemComponent = components[type];
                            return <ItemComponent
                                    onClick={this.skip}
                                    data={item.data}
                                />;
                        }}
                        
                    />
                </TabContext.Provider>
            </div>;
    }

    skip() {
        console.log('开始跳转！');
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);

