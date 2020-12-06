import {combineReducers, createStore} from 'redux';
import market from './reducers/market';
import members from './reducers/members';
import shares from './reducers/shares';
import errors from './reducers/errors';

export default createStore(
    combineReducers({market, members, shares, errors})
);