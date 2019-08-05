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
                       color1={colors.preloaderColors[0]}
                       color2={colors.preloaderColors[1]}
                       color3={colors.preloaderColors[2]}
                       color4={colors.preloaderColors[3]}/>
        </div>
    );
};

Preloader.propTypes = {
    size: PropTypes.number.isRequired,
    colors: PropTypes.object.isRequired
};

export default Preloader;
