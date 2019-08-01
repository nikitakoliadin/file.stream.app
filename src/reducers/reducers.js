import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import preloaderReducer from './preloaderReducer';

const reducers = combineReducers({
    routing: routerReducer,
    preloader: preloaderReducer,
});

export default reducers;
