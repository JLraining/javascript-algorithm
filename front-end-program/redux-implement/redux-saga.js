// redux-thunk && redux-saga

// redux-thunk虽然支持了异步场景，但其存在的缺点也很明显：
// 1、使用回调的方式来实现异步，容易形成层层回调的面条代码
// 2、异步逻辑散落在各个action中，难以进行统一管理
export default function thunk({ dispatch, getState }) {
    return (next) => (action) => {
      if (typeof action === 'function') {
        action(dispatch, getState())
      }
      next(action)
    }
  }

  const addCountAction = (text) => {  
    return {
        type: ADD,
        text
    }
}

const fetchData = (text) => (dispatch) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000)
    }).then(() => {
        dispatch(addCountAction(text))
    })
}


// 1、使用generator的方式实现，更加符合同步代码的风格；
// 2、统一监听action，当命中action时，执行对应的saga任务，并且支持各个saga之间的互相调用，使得异步代码更方便统一管理。
// 在saga中，出现了新的概念，其中effect指一个普通的js对象，描述一个指定的动作，saga指一个generator函数。


//index.js
const sagaMiddleware = createSagaMiddleware();
store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

//rootSaga.js
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Our worker Saga: 将异步执行 increment 任务
function* addAsync(action) {
  yield fork(delay, 1000)
  yield put(formatAction(action, namespace))
}


export default function* rootSaga() {
  yield takeEvery(`${namespace}/ADD_ASYNC`, addAsync)
}

// 先通过createSagaMiddleware生成sagaMiddleware，注册成为redux的中间件，再调用中间件暴露的run方法，run的作用是统一初始化rootSaga，开启对action的监听。其中createSagaMiddleware的简单版如下：