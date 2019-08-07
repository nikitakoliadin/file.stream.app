import * as types from '../constants/actionTypes';

export const setChunkSize = size => {
    return {
        type: types.SET_CHUNK_SIZE_TYPE,
        payload: size
    }
};
