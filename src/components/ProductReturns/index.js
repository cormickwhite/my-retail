import React, { Component } from 'react';
import '../../App.css';

class ProductReturns extends Component {
  render() {
    return (
      <div className="component">
        <div className="returns-container">
          <span className="med-lrg-subtext" style={{ paddingRight: 10 }}>
            returns
          </span>
          <span className="vert-divider" />
          <span className="sm-subtext">
            This item must be returned within 30 days of the ship date. See{' '}
            <strong>return policy</strong> for details. Price, promotions,
            styles, and availability may vary by store and online.
          </span>
        </div>
      </div>
    );
  }
}

export default ProductReturns;
