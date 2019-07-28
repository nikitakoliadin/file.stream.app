import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {onDropFiles} from '../../actions/fileActions';
import Main from './Main';

class MainContainer extends Component {

    getMainComponent() {
        const {onDropFiles} = this.props;
        return <Main onDropFiles={onDropFiles}/>
    }

    render() {
        return (
            <div id={"MainContainer"}>
                {this.getMainComponent()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        onDropFiles
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(MainContainer);
