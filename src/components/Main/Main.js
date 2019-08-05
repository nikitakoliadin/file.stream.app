import React from 'react';
import PropTypes from 'prop-types';

import DropZone from '../DropZone/DropZone';
import styles from './Main.module.css';

const Main = props => {
    const {onDropFiles} = props;
    return (
        <div id={"Main"}
             className={styles.Main}>
            <DropZone onDropFiles={onDropFiles}/>
        </div>
    );
};

Main.propTypes = {
    onDropFiles: PropTypes.func.isRequired
};

export default Main;
