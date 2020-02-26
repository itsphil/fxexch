import React from 'react';
import './Sidebar.scss';

import CurrencySelector from '../currency-selector/CurrencySelector';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    }

    this.updateSidebarState = this.updateSidebarState.bind(this);
  }
  
  updateSidebarState() {
    this.setState({ open: !this.state.open });
    
    this.props.onSidebarChange(!this.state.open);
  }

  render() {
    return (
      <div className="sidebar" onClick={this.updateSidebarState}>
        Sidebar component

        <CurrencySelector />
      </div>
    );
  }
}

export default Sidebar;
