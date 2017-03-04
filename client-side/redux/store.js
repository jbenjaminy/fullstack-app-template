import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //optional
import reducers from './reducers';

export default createStore(reducers,  applyMiddleware(thunk));
