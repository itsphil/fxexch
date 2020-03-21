import { DARKMODE_TOGGLE } from './actionTypes';
import { DARKMODE_STATE } from './constants';

const initialState = {
  darkMode: DARKMODE_STATE.OFF
};

const settingsState = (state = initialState, action) => {
  switch (action.type) {
    case DARKMODE_TOGGLE: {
      return {
        ...state,
        darkMode: action.payload.state
      }
    }
    default: {
      return state;
    }
  }
};

export default settingsState;
