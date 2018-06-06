import { createStore, combineReducers } from 'redux';
import focus from './reducers/focus';

const reducers = combineReducers({
   focus,
})

const store = createStore(reducers);
export default store;