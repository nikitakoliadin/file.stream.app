import React from 'react';
import PropTypes from 'prop-types';

import styles from './App.module.css';

const App = props => {
    const {children} = props;
    return (
        <div id={"App"}
             className={styles.App}>
            {children}
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element.isRequired
};

export default App;
