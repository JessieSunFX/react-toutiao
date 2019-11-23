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

// dispatch中的称为action
store.dispatch({
    type: 'PUSH_LIST',
    data: {
        title: '标题'
    }
});