export const readTypes = {
    AS_BINARY_STRING: "readAsBinaryString",
    AS_TEXT: "readAsText",
    AS_DATA_URL: "readAsDataURL",
    AS_ARRAY_BUFFER: "readAsArrayBuffer"
};

export class FileStream {

    #chunkSize;

    constructor(chunkSize) {
        this.#chunkSize = chunkSize;
    }

    readAsync(file, typeOfReading, onLoadFileCallback, onLoadChunkCallback) {
        if (!this.#chunkSize) {
            throw new FileStreamException("Chunk size should exists and not be equals to zero!");
        }
        if (!file) {
            throw new FileStreamException("File should exists!");
        }
        if (!typeOfReading) {
            throw new FileStreamException("Type of reading should exists!");
        }
        if (!Object.values(readTypes).includes(typeOfReading)) {
            throw new FileStreamException("Incorrect type of reading!");
        }
        if (file.size < this.#chunkSize) {
            this.#chunkSize = file.size;
        }
        const start = 0;
        const stop = this.#chunkSize;
        const step = this.#chunkSize;
        const fileStreamReaderAsync = new FileStreamReaderAsync(start, stop, step, typeOfReading);
        fileStreamReaderAsync.read(file, onLoadFileCallback, onLoadChunkCallback);
    }
}

class FileStreamException {

    #message;

    constructor(message) {
        this.#message = message;
    }

    get message() {
        return this.#message;
    }
}

class FileStreamReaderAsync {

    #start;
    #stop;
    #step;
    #typeOfReading;
    #fileReader;

    constructor(start, stop, step, typeOfReading) {
        this.#start = start;
        this.#stop = stop;
        this.#step = step;
        this.#typeOfReading = typeOfReading;
        this.#fileReader = new FileReader();
    }

    read(file, onLoadFileCallback, onLoadChunkCallback) {
        this.#fileReader.onloadend = event => {
            if (this.#start >= file.size) {
                if (onLoadFileCallback) {
                    onLoadFileCallback(file);
                }
                return;
            }
            if (onLoadChunkCallback) {
                onLoadChunkCallback(file, event);
            }
            this.#start += this.#step;
            this.#stop += this.#step;
            this.read(file, onLoadFileCallback, onLoadChunkCallback);
        };
        this.#fileReader[this.#typeOfReading](file.slice(this.#start, this.#stop));
    }
}
