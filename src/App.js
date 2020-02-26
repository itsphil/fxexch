import React from 'react';
import './App.css';

import SettingsInline from './components/settings-inline/SettingsInline';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <SettingsInline />
    </div>
  );
}

export default App;
