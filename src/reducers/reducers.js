import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import chunkPickerReducer from './chunkPickerReducer';
import preloaderReducer from './preloaderReducer';

const reducers = combineReducers({
    routing: routerReducer,
    chunkPicker: chunkPickerReducer,
    preloader: preloaderReducer,
});

export default reducers;
