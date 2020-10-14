import { createStore } from 'redux';
import buyCakeReducer from './cakes/CakeReducers';

const store = createStore(buyCakeReducer);

export default store;