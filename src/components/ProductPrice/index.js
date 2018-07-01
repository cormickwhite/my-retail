import React, { Component } from 'react';
import '../../App.css';

class ProductPrice extends Component {
  render() {
    const { price } = this.props;

    return (
      <div className="price-container">
        <strong className="lrg-text">{price.formattedPriceValue}</strong>
        <span className="sm-subtext"> {price.priceQualifier}</span>
      </div>
    );
  }
}

export default ProductPrice;
