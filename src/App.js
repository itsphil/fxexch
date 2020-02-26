import React from 'react';
import './App.scss';

import CurrencyList from './components/currency-list/CurrencyList';
import SettingsInline from './components/settings-inline/SettingsInline';
import Sidebar from './components/sidebar/Sidebar';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      sidebarOpen: false
    }

    this.onSidebarChange = this.onSidebarChange.bind(this);
    this.getSidebarClass = this.getSidebarClass.bind(this);
  }

  onSidebarChange(open) {
    this.setState({
      sidebarOpen: open
    });
  }

  getSidebarClass() {
    console.log(this.state.sidebarOpen);
    return this.state.sidebarOpen ? ' open' : '';
  }

  render() {
    return (
      <div className={ 'app' + this.getSidebarClass() }>
        <Sidebar onSidebarChange={this.onSidebarChange} />
        <CurrencyList />
        <SettingsInline />
      </div>
    );
  }
}

export default App;
