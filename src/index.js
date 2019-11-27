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
import store from './store';
import {Provider, connect} from 'react-redux';

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
        this.reactiveList();
    }

    getList() {
        return fetch('http://localhost:9000/list')
            .then(res => res.json());
    }

    render() {
        console.log('props:::::::', this.props.list);
        return <div className="container">
                <TabContext.Provider value={ALL_TAB}>
                    <Tab tabs={TABS}></Tab>
                    <List 
                        // dataSource = {this.state.list}
                        dataSource = {this.props.list}
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

    // updateList() {
    //     return this.getList()
    //         .then(({data}) => {
    //            return {
    //                type: 'PUSH_LIST',
    //                data
    //            };
    //         });
    // }

    updateList(dispatch) {
        console.log('dispatch?????', dispatch);
        return this.getList()
            .then(({data}) => {
                dispatch({
                    type: 'PUSH_LIST',
                    data
                });
            });
    }

    reactiveList() {
        console.log('my-props::::', this.props);

        // redux问题1：不知道订阅哪些子集好，订阅需要条件，比如list改变时
        // 问题2：万一store位置改变改变了，要跟着变动
        // 解决方式：react-redux
        // store.subscribe(() => {
        //     console.log('state:::::', store.getState());
        //     this.setState({
        //         list: store.getState().list
        //     });
        // });
        // this.updateList()
        //     .then(data => {
        //         // store.dispatch({
        //         //     type: 'PUSH_LIST',
        //         //     data
        //         // });
        //         this.props.listUpdate(data);
        //     });
        // this.props.listUpdate(this.updateList());
        this.props.listUpdate(this.updateList.bind(this));
        window.onscroll = () => {
            // this.updateList()
            //     .then(data => {
            //         // store.dispatch({
            //         //     type: 'PUSH_LIST',
            //         //     data
            //         // });
            //         this.props.listUpdate(data);
            //     });
            // this.props.listUpdate(this.updateList());
            this.props.listUpdate(this.updateList.bind(this));
       };
    }

    skip() {
        console.log('开始跳转！');
    }
}

const App = connect(
    state => {//mapStateToProps--类似于subscribe后把state放到context中
        console.log('state::::', state);
        return {
            list: state.list
        };
    },
    // 问题抛出：目前dispatch的都是同步方法，没有异步方法
    // 引入：middleware(redux中的中间件叫enhancer)
    // enhancer 让你封装reducer的处理
    dispatch => {//mapDispatchToProps
        return {
            // listUpdate: data => {
            //     dispatch({
            //         type: 'PUSH_LIST',
            //         data
            //     });
            // }
            listUpdate: task => {
                dispatch(task);
            }
        };
    }
)(Main);

ReactDOM.render(
    // 大多数工程都会选择将<Provider>套在根上
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

