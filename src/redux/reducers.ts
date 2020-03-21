import { combineReducers } from 'redux';

import settingsState from './settings/reducer';
import sidebarState from './sidebar/reducer';

export default combineReducers({
    settingsState,
    sidebarState
});