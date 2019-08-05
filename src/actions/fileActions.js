import * as types from '../constants/actionTypes';

import {startPreloader, finishPreloader} from './preloaderActions';
import {FileStream, readTypes} from '../js/FileStream';
import * as appConstants from '../constants/appConstants';

export const onDropFiles = (acceptedFiles, rejectedFiles) => dispatch => {
    dispatch(startPreloader());
    dispatch(startFilesProcessing({acceptedFiles, rejectedFiles}));
    try {
        acceptedFiles.forEach((file, index) => {
            if (index !== acceptedFiles.length - 1) {
                const fileStream = new FileStream(appConstants.TEN_MEGABYTES);
                fileStream.readAsync(
                    file,
                    readTypes.AS_TEXT,
                    file => {
                        console.log("File is loaded:", file);
                    },
                    (file, event) => {
                        console.log("File is loading:", file.name, "Loaded chunk size:", event.loaded, "bytes");
                    }
                );
            } else {
                const fileStream = new FileStream(appConstants.TEN_MEGABYTES);
                fileStream.readAsync(
                    file,
                    readTypes.AS_TEXT,
                    file => {
                        console.log("File is loaded:", file);
                        dispatch(finishFilesProcessing());
                        dispatch(finishPreloader());
                    },
                    (file, event) => {
                        console.log("File is loading:", file.name, "Loaded chunk size:", event.loaded, "bytes");
                    }
                );
            }
        });
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
