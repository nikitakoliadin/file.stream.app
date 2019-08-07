import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {setChunkSize} from '../../actions/chunkPickerAction';
import {onDropFiles} from '../../actions/fileActions';
import Main from './Main';
import Preloader from '../Preloader/Preloader';
import * as appConstants from '../../constants/appConstants';
import * as colors from '../../constants/colors';

class MainContainer extends Component {

    getMainComponent() {
        const {chunkPicker} = this.props;
        const {setChunkSize, onDropFiles} = this.props;
        const chunkSizeValues = [
            {
                key: "8 B",
                value: appConstants.EIGHT_BYTES
            },
            {
                key: "1 KB",
                value: appConstants.ONE_KILOBYTE
            },
            {
                key: "1 MB",
                value: appConstants.ONE_MEGABYTE
            },
            {
                key: "10 MB",
                value: appConstants.TEN_MEGABYTES
            },
            {
                key: "100 MB",
                value: appConstants.ONE_HUNDRED_MEGABYTES
            },
            {
                key: "1 GB",
                value: appConstants.ONE_GIGABYTE
            }
        ];
        return <Main chunkPicker={chunkPicker}
                     chunkSizeValues={chunkSizeValues}
                     setChunkSize={setChunkSize}
                     onDropFiles={onDropFiles}/>
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
        chunkPicker: state.chunkPicker,
        preloader: state.preloader
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        setChunkSize,
        onDropFiles
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainContainer);
