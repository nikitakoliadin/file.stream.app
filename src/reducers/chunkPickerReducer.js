import * as types from '../constants/actionTypes';
import * as appConstants from '../constants/appConstants';

const initialState = {
    chunkSize: appConstants.TEN_MEGABYTES
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SET_CHUNK_SIZE_TYPE: {
            return {
                ...state,
                chunkSize: action.payload
            }
        }
        default: {
            return state
        }
    }
}
