import React from 'react';
import './Sidebar.scss';

import CurrencySelectorBase from '../currency-selector-base/CurrencySelectorBase';
import CurrencySelector from '../currency-selector/CurrencySelector';
import {
  SIDEBAR_STATE,
  sidebarToggle
} from '../../redux';
import store from '../../redux/store';

interface State {
  open: string
}

class Sidebar extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);

    this.state = store.getState().sidebarState;

    this.updateSidebarState = this.updateSidebarState.bind(this);
  }
  
  updateSidebarState() {
    const newState = this.state.open === SIDEBAR_STATE.CLOSED ? SIDEBAR_STATE.OPEN : SIDEBAR_STATE.CLOSED;

    this.setState({ open: newState });   

    store.dispatch(sidebarToggle(newState));
  }

  render() {
    return (
      <div className="sidebar" onClick={this.updateSidebarState}>
        <div className="sidebar-logo">FXEX.CH</div>
        
        Sidebar component
        <CurrencySelectorBase />
        <CurrencySelector />
      </div>
    );
  }
}

export default Sidebar;
