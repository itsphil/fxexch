import React from 'react';
import './Sidebar.scss';

import CurrencySelector from '../currency-selector/CurrencySelector';

function Sidebar() {
  return (
    <div className="sidebar">
      Sidebar component

      <CurrencySelector />
    </div>
  );
}

export default Sidebar;
