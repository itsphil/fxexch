import React from 'react';
import './CurrencyList.scss';

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
