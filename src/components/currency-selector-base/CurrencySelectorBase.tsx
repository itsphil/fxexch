import React from 'react';
import './CurrencySelectorBase.scss';

class CurrencySelector extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="currency-selector">
        Currency Selector Base component
      </div>
    );
  }
}

export default CurrencySelector;
