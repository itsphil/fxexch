import { SIDEBAR_TOGGLE } from '../actionTypes';
import { SIDEBAR_STATE } from '../constants';

const initialState = SIDEBAR_STATE.CLOSED;

const sidebarState = (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_TOGGLE: {
      return action.payload.state;
    }
    default: {
      return state;
    }
  }
};

export default sidebarState;
