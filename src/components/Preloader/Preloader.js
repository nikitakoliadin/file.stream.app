import React from 'react';
import PropTypes from 'prop-types';
import MDSpinner from 'react-md-spinner';

import styles from './Preloader.module.css';

const Preloader = props => {
    const {size, colors} = props;
    return (
        <div id={"Preloader"}
             className={styles.Preloader}>
            <MDSpinner size={size}
                       color1={colors[0]}
                       color2={colors[1]}
                       color3={colors[2]}
                       color4={colors[3]}/>
        </div>
    );
};

Preloader.propTypes = {
    size: PropTypes.number.isRequired,
    colors: PropTypes.array.isRequired
};

export default Preloader;
