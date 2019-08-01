import * as types from '../constants/actionTypes';

export const startPreloader = () => {
    return {
        type: types.START_PRELOADER_TYPE,
        payload: true
    }
};

export const finishPreloader = () => {
    return {
        type: types.FINISH_PRELOADER_TYPE,
        payload: false
    }
};
