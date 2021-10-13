
// TODO 增加异常处理

function createStore (reducer) {
    let currentState;
    let listeners = [];

    const getState = () => {
        return currentState;
    };
    const dispatch = (action) => {
        currentState = reducer(currentState, action)
        listeners.forEach(listener => listener());

    };
    const subscribe = (listener) => {
        this.listener.push(listener);
    };

    return {
        getState,
        dispatch,
        subscribe,
    }
}

// thunk-middleware
