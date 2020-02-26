import React from 'react';
import './Currency.scss';

import Price from '../price/Price';

class Currency extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="currency">
        <Price />
      </div>
    );
  }
}

export default Currency;
