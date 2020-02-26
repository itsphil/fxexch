import React from 'react';
import './CurrencyList.css';

import Currency from '../currency/Currency';

function CurrencyList() {
  return (
    <div className="currency-list">
      <Currency />
      <Currency />
      <Currency />
    </div>
  );
}

export default CurrencyList;
