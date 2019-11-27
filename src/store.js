import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


const toutiaoProcessor = (state = {list: []}, action) => {
    console.log('i got an dispatch:::', action);
    if(action.type === 'PUSH_LIST') {
        return {
            ...state,
            list: state.list.concat(action.data)
        };
    }
    return state;
};

const reduxPromise = ({dispatch, getState}) => next => action => {//？如果再次返回promise呢
    console.log('reduxPromise::::', action, next);
    if (typeof action.then === 'function') {
        return action.then(next);
        // return action(next); 模拟redux-thunk 
    }
    return next(action);
};

// const store = createStore(toutiaoProcessor, applyMiddleware(reduxPromise));
const store = createStore(toutiaoProcessor, applyMiddleware(thunkMiddleware));

export default store;