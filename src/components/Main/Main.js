import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import styles from './Main.module.css';

class Main extends Component {

    constructor(props, context) {
        super(props, context);
        this.handleOnDrop = this.handleOnDrop.bind(this);
    }

    handleOnDrop(acceptedFiles, rejectedFiles) {
        const {onDropFiles} = this.props;
        onDropFiles(acceptedFiles, rejectedFiles);
    }

    render() {
        return (
            <div id={"Main"}
                 className={styles.Main}>
                <Dropzone onDrop={this.handleOnDrop}
                          className={styles.Dropzone}>
                    Drop file's here
                </Dropzone>
            </div>
        );
    }
}

Main.propTypes = {
    onDropFiles: PropTypes.func.isRequired
};

export default Main;
