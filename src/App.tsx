import React from 'react';
import './App.scss';

import CurrencyList from './components/currency-list/CurrencyList';
import SettingsInline from './components/settings-inline/SettingsInline';
import Sidebar from './components/sidebar/Sidebar';
import { SIDEBAR_STATE } from './redux/constants';
import store from './redux/store';

class App extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      sidebarState: store.getState().sidebarState
    }

    this.getSidebarClass = this.getSidebarClass.bind(this);

    store.subscribe(() => {
      const sidebarState = store.getState().sidebarState;

      this.setState({ sidebarState });
    });
  }

  getSidebarClass() {
    // return this.state.sidebarState === SIDEBAR_STATE.OPEN ? ' open' : '';
  }

  render() {
    return (
      <div className={ 'app' + this.getSidebarClass() }>
        <Sidebar />
        <CurrencyList />
        <SettingsInline />
      </div>
    );
  }
}

export default App;
