import React from 'react';
import './App.scss';

import CurrencyList from './components/currency-list/CurrencyList';
import SettingsInline from './components/settings-inline/SettingsInline';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <CurrencyList />
      <SettingsInline />
    </div>
  );
}

export default App;
