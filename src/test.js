import {createStore} from 'redux';

// reducer
const listProcessor = (state, action) => {
    console.log('state-action:', state, action);
    if(/INIT/.exec(action.type)) {//初始化state
        return [{
            name: 'yuanxin'
        }];
    }else if (action.type === 'PUSH_LIST') {
        return [
            action.data
        ];
    }
    return state;
};

// store
//const store = createStore(listProcessor, {name: 'yuanxin'});//preloaded，不建议在这里放initState；
//适合放预加载之前的数据，如果首次的数据是从服务端传过来的(模板引擎)，而不是通过异步请求获取的，可以放到此处
//或者已经提前定义好了一些初始的数据
//加快首屏渲染速度
const store = createStore(listProcessor);

console.log('store::----11', store.getState());

// 必须先订阅后派发
store.subscribe(function() {
    console.log('in-subscribe:::', store.getState());
});

// dispatch中的称为action
store.dispatch({
    type: 'PUSH_LIST',
    data: {
        title: '标题'
    }
});

console.log('store:::', store.getState());
console.log('store返回值:::', store);

//--------------------------------------

// var store = {
//     name: 'yuanxin'
// };

// function changeList(store, action) {
//     store.state = [
//         action.data
//     ];
// }

// console.log('store------11:::', store.state);

// changeList({
//     data: {
//         title: '标题'
//     }
// });

// console.log('store:::', store.state);






