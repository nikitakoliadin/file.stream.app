import * as types from '../constants/actionTypes';

import {startPreloader, finishPreloader} from './preloaderActions';
import {FileStream, readTypes} from '../js/FileStream';

export const onDropFiles = (acceptedFiles, rejectedFiles, chunkSize) => dispatch => {
    dispatch(startPreloader());
    acceptedFiles.sort((leftFile, rightFile) => leftFile.size - rightFile.size);
    dispatch(startFilesProcessing({acceptedFiles, rejectedFiles}));
    try {
        acceptedFiles.forEach((file, index) => {
            const fileStream = new FileStream(chunkSize);
            fileStream.readAsync(
                file,
                readTypes.AS_TEXT,
                file => {
                    dispatch(fileIsLoaded(file));
                    fileStream.close(file => {
                        dispatch(fileIsWritten(file));
                        if (index === acceptedFiles.length - 1) {
                            dispatch(finishFilesProcessing());
                            dispatch(finishPreloader());
                        }
                    });
                },
                (file, event) => {
                    console.log("File is loading:", file.name, "Loaded chunk size:", event.loaded, "bytes");
                    fileStream.writeAsync(
                        file,
                        event,
                        (file, data) => console.log("File is writing:", file.name)
                    );
                }
            );
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

const fileIsLoaded = file => {
    return {
        type: types.FILE_IS_LOADED_TYPE,
        payload: file
    }
};

const fileIsWritten = file => {
    return {
        type: types.FILE_IS_WRITTEN_TYPE,
        payload: file
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
