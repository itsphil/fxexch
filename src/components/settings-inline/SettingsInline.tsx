import React from 'react';

import './SettingsInline.scss';
import {
  DARKMODE_STATE,
  darkModeToggle
} from '../../redux';
import store from '../../redux/store';

interface State {
  darkMode: string
}

class SettingsInline extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = store.getState().settingsState;

    this.updateDarkModeState = this.updateDarkModeState.bind(this);
  }

  updateDarkModeState() {
    const newState = this.state.darkMode === DARKMODE_STATE.ON ? DARKMODE_STATE.OFF : DARKMODE_STATE.ON;

    this.setState({ darkMode: newState });   

    store.dispatch(darkModeToggle(newState));
  }

  render() {
    return (
      <div className="settings-inline" onClick={this.updateDarkModeState}>
        <button>Dark Mode</button>
      </div>
    );
  }
}

export default SettingsInline;
