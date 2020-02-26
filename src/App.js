import React from 'react';
import './App.css';

import CurrencyList from './components/currency-list/CurrencyList';
import SettingsInline from './components/settings-inline/SettingsInline';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <SettingsInline />
      <Sidebar />
      <CurrencyList />
    </div>
  );
}

export default App;
