
// [浅谈redux、react-redux、redux-saga原理 | 码农家园](https://www.codenong.com/j5e951fdd51882573834ed4df/)

function createStore (reducer, initialState, enhandler) {
    let currentState = initialState;
    let listeners = [];

    if(initialState && typeof initialState ==='function') {
        enhandler = initialState;
        initialState = undefined;
    }

    if(enhandler && typeof enhandler === "function") {
      return enhandler(createStore)(reducer)
    }
 
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

function compose(...fns) {
  if (fns.length === 0) return arg => arg    
  if (fns.length === 1) return fns[0]    
  return fns.reduce((res, cur) =>(...args) => res(cur(...args)))
}

// Middleware 可以让你包装 store 的 dispatch 方法来达到你想要的目的。
// middleware 的函数签名是 ({ getState, dispatch }) => next => action。

export const applyMiddleware = (...middlewares) => {
  return (createStore) => {
      return (reducer) => {
          const store = createStore(reducer)    
          let { getState, dispatch } = store    
          const params = {      
              getState,      
              dispatch: (action) => dispatch(action)    
          }    
          const middlewareArr = middlewares.map(middleware => middleware(params))
     
          dispatch = compose(...middlewareArr)(dispatch)    
          return { ...store, dispatch }
      }
  }
}

// 也就是说，applyMiddleware、中间件logger都是柯里化后的函数，利用了其延迟执行的特点，分步进行调用，最终
// applyMiddleware(middleware1, middleware2, middleware3)经过处理后，会得到
// dispatch = middleware1(middleware2(middleware3(action)))的执行方式，即洋葱模型


export const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
        nextState[key] = reducers[key](state[key], action);
        return nextState;
      },
      {}
    );
  };
}