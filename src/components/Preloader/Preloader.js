import React from 'react';
import MDSpinner from 'react-md-spinner';

import styles from './Preloader.module.css';

import * as colors from '../../constants/colors';

const Preloader = () => (
    <div id={"Preloader"}
         className={styles.Preloader}>
        <MDSpinner size={48}
                   color1={colors.preloaderColors[0]}
                   color2={colors.preloaderColors[1]}
                   color3={colors.preloaderColors[2]}
                   color4={colors.preloaderColors[3]}/>
    </div>
);

export default Preloader;
