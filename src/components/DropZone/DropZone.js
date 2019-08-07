import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './DropZone.module.css';

class DropZone extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleOnDrop = this.handleOnDrop.bind(this);
    }

    handleOnDrop(acceptedFiles, rejectedFiles) {
        const {chunkPicker} = this.props;
        const {onDropFiles} = this.props;
        onDropFiles(acceptedFiles, rejectedFiles, chunkPicker.chunkSize);
    }

    render() {
        return (
            <div id={"DropZone"}
                 className={styles.DropZone}>
                <Dropzone onDrop={this.handleOnDrop}
                          className={styles.Dropzone}>
                    Drop file's here
                </Dropzone>
            </div>
        );
    }
}

DropZone.propTypes = {
    chunkPicker: PropTypes.object.isRequired,
    onDropFiles: PropTypes.func.isRequired
};

export default DropZone;
