import { createStore } from 'redux'
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
function listener () {
    const current = store.getState();
    console.log(`当前数字为：${current.value}`);
}
store.subscribe(listener); // 监听state的改变
store.dispatch({ type: 'INCREMENT' });
// 当前数字为：11
store.dispatch({ type: 'INCREMENT' });
// 当前数字为：12
store.dispatch({ type: 'DECREMENT' });
// 当前数字为：11

export default store;
