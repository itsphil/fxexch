import React from 'react';
import './Currency.scss';

import Price from '../price/Price';

class Currency extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="currency">
        Currency Component
        <Price />
      </div>
    );
  }
}

export default Currency;
