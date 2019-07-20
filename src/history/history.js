import {useRouterHistory} from 'react-router';
import {createHistory} from 'history';

import * as api from '../constants/api';

export const browserHistory = useRouterHistory(createHistory)({
    basename: api.BASE_URL
});
