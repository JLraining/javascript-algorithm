import { createStore, applyMiddleware } from 'redux'
const defaultState = {
    value: 10
}

// reducer处理函数
function reducer (state = defaultState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                value: state.value + 1
            }
        case 'DECREMENT':
            return {
                ...state,
                value: state.value - 1
            }
        default:
            return state
    }
}

const store = createStore(reducer);


const init = store.getState();

const logger = ({ getState, dispatch }) => next => action => {
    console.log('will dispatch', action)
    // 调用 middleware 链中下一个 middleware 的 dispatch。
    const returnValue = next(action)
    
    console.log('state after dispatch', getState())
    return returnValue
};

// redux-thunk
const thunk = ({ getState, dispatch }) => next => action => {
    if (typeof action === 'function') {
        return action(dispatch, getState);
    }
    return next(action)
}

function listener () {
    const current = store.getState();
    console.log(`当前数字为：${current.value}`);
}

store.subscribe(listener, applyMiddleware(logger, thunk)); // 监听state的改变
store.dispatch({ type: 'INCREMENT' });
// 当前数字为：11
store.dispatch({ type: 'INCREMENT' });
// 当前数字为：12
store.dispatch({ type: 'DECREMENT' });
// 当前数字为：11

export default store;

const rootReducer = combineReducers({
    app: appReducer,
    comp: compReducer
})

export default rootReducer;