import * as types from '../constants/actionTypes';

const initialState = {
    showPreloader: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.START_PRELOADER_TYPE: {
            return {
                ...state,
                showPreloader: action.payload
            }
        }
        case types.FINISH_PRELOADER_TYPE: {
            return {
                ...state,
                showPreloader: action.payload
            }
        }
        default: {
            return state
        }
    }
}
