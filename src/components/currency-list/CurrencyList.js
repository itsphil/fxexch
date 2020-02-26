import React from 'react';
import './CurrencyList.scss';

import Currency from '../currency/Currency';

class CurrencyList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="currency-list">
        <Currency />
        <Currency />
        <Currency />
      </div>
    );
  }
}

export default CurrencyList;
