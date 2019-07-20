import React from 'react';
import {Route, IndexRedirect} from 'react-router';

import * as routing from './constants/routing';
import App from './components/App/App';
import MainContainer from './components/Main/MainContainer';

export default (
    <div>
        <Route path={routing.ROOT_ROUTE} component={App}>
            <IndexRedirect to={routing.MAIN_ROUTE}/>
            <Route path={routing.MAIN_ROUTE} component={MainContainer}/>
            <Route path={routing.OTHER_ROUTE} component={MainContainer}/>
        </Route>
    </div>
);
