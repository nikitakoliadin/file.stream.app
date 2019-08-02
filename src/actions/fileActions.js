import * as types from '../constants/actionTypes';

import {startPreloader, finishPreloader} from './preloaderActions';

export const onDropFiles = (acceptedFiles, rejectedFiles) => dispatch => {
    dispatch(startPreloader());
    dispatch(startFilesProcessing({acceptedFiles, rejectedFiles}));
    try {
    } catch (e) {
        dispatch(finishFilesProcessing());
        dispatch(filesProcessingError(e.message));
        dispatch(finishPreloader());
    }
};

const startFilesProcessing = files => {
    return {
        type: types.START_FILES_PROCESSING_TYPE,
        payload: files
    }
};

const finishFilesProcessing = () => {
    return {
        type: types.FINISH_FILES_PROCESSING_TYPE
    }
};

const filesProcessingError = message => {
    return {
        type: types.FILES_PROCESSING_ERROR_TYPE,
        payload: message
    }
};
