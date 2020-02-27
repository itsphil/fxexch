import React from 'react';
import './Sidebar.scss';

import CurrencySelector from '../currency-selector/CurrencySelector';
import { sidebarToggle } from '../../redux/actions';
import { SIDEBAR_STATE } from '../../redux/constants';
import store from '../../redux/store';

class Sidebar extends React.Component {
  constructor() {
    super();

    this.state = {
      open: SIDEBAR_STATE.CLOSED
    }

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

        <CurrencySelector />
      </div>
    );
  }
}

export default Sidebar;
