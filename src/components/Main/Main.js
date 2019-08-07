import React from 'react';
import PropTypes from 'prop-types';

import ChunkPicker from '../ChunkPicker/ChunkPicker';
import DropZone from '../DropZone/DropZone';
import styles from './Main.module.css';

const Main = props => {
    const {chunkPicker, chunkSizeValues} = props;
    const {setChunkSize, onDropFiles} = props;
    return (
        <div id={"Main"}
             className={styles.Main}>
            <ChunkPicker chunkPicker={chunkPicker}
                         chunkSizeValues={chunkSizeValues}
                         setChunkSize={setChunkSize}/>
            <DropZone onDropFiles={onDropFiles}/>
        </div>
    );
};

Main.propTypes = {
    chunkPicker: PropTypes.object.isRequired,
    chunkSizeValues: PropTypes.array.isRequired,
    setChunkSize: PropTypes.func.isRequired,
    onDropFiles: PropTypes.func.isRequired
};

export default Main;
