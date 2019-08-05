import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {onDropFiles} from '../../actions/fileActions';
import Main from './Main';
import Preloader from '../Preloader/Preloader';
import * as appConstants from '../../constants/appConstants';
import * as colors from '../../constants/colors';

class MainContainer extends Component {

    getMainComponent() {
        const {onDropFiles} = this.props;
        return <Main onDropFiles={onDropFiles}/>
    }

    getPreloaderComponent() {
        const {preloader} = this.props;
        if (preloader.showPreloader) {
            return <Preloader size={appConstants.PRELOADER_SIZE}
                              colors={colors.preloaderColors}/>
        }
    }

    render() {
        return (
            <div id={"MainContainer"}>
                {this.getMainComponent()}
                {this.getPreloaderComponent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        preloader: state.preloader
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onDropFiles
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainContainer);
