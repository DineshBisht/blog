import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware  from 'redux-saga';
import rootReducers from './rootReducers';
import logger from "redux-logger";
import  {rootSaga} from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
const middleWare = [logger,sagaMiddleware]
const Store = createStore(rootReducers,applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga)

export default Store;