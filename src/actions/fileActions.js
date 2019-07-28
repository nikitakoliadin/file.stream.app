import * as types from '../constants/actionTypes';

export const onDropFiles = (acceptedFiles, rejectedFiles) => dispatch => {
    dispatch(startFilesProcessing());
    console.log("Accepted files:", acceptedFiles);
    console.log("Rejected files:", rejectedFiles);
    dispatch(finishFilesProcessing());
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
