import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {routerMiddleware} from 'react-router-redux';
import throttle from 'lodash.throttle';

import {loadState, saveState} from './localStorage';
import {browserHistory} from '../history/history';
import reducers from '../reducers/reducers';

const configureStore = () => {
    const persistedState = loadState();
    const logger = createLogger();
    const router = routerMiddleware(browserHistory);
    const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk, logger, router)));
    store.subscribe(throttle(() => {
        saveState({
            chunkPicker: store.getState().chunkPicker
        });
    }, 1000));
    if (process.env.NODE_ENV !== "production") {
        if (module.hot) {
            module.hot.accept("../reducers/reducers", () => {
                store.replaceReducer(reducers);
            });
        }
    }
    return store;
};

export default configureStore;
