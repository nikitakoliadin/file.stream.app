import * as types from '../constants/actionTypes';

import {startPreloader, finishPreloader} from './preloaderActions';

export const onDropFiles = (acceptedFiles, rejectedFiles) => dispatch => {
    dispatch(startPreloader());
    dispatch(startFilesProcessing());
    console.log("Accepted files:", acceptedFiles);
    console.log("Rejected files:", rejectedFiles);
    dispatch(finishFilesProcessing());
    dispatch(finishPreloader());
};

const startFilesProcessing = () => {
    return {
        type: types.START_FILES_PROCESSING_TYPE
    }
};

const finishFilesProcessing = () => {
    return {
        type: types.FINISH_FILES_PROCESSING_TYPE
    }
};
