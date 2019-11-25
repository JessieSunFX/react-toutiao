import {createStore} from 'redux';

// reducer
const listProcessor = (state, action) => {
    console.log('state-action:', state, action);
    if (action.type === 'PUSH_LIST') {
        return [
            action.data
        ];
    }
    return state;
};

// store
const store = createStore(listProcessor);

console.log('store::----11', store.getState());

// dispatch中的称为action
store.dispatch({
    type: 'PUSH_LIST',
    data: {
        title: '标题'
    }
});

console.log('store:::', store.getState());

//--------------------------------------

var store = {};

function changeList(store, action) {
    store.state = [
        action.data
    ];
}

console.log('store------11:::', store.state);

changeList({
    data: {
        title: '标题'
    }
});

console.log('store:::', store.state);






