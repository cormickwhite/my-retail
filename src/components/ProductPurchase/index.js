import React, { Component } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons';

class ProductPurchase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decreaseQuantity = () => {
    if (this.state.quantity > 1) {
      this.setState({ quantity: this.state.quantity - 1 });
    }
  };

  render() {
    const { purchaseChannelCode } = this.props;

    const pickupInStore =
      purchaseChannelCode === '0' || purchaseChannelCode === '2';

    const addToCart =
      purchaseChannelCode === '0' || purchaseChannelCode === '1';

    return (
      <div className="component">
        <div className="outline-box">
          <div className="quantity-item">
            <span className="sm-text">quantity:</span>
          </div>
          <div className="quantity-item">
            <button className="circle-button" onClick={this.decreaseQuantity}>
              <FontAwesomeIcon icon={faMinusCircle} size="3x" />
            </button>
            <strong className="quantity-value">{this.state.quantity}</strong>
            <button className="circle-button" onClick={this.increaseQuantity}>
              <FontAwesomeIcon icon={faPlusCircle} size="3x" />
            </button>
          </div>
        </div>
        <div className="button-container">
          {pickupInStore && (
            <button className="purchase-buttons black">PICK UP IN STORE</button>
          )}
          {addToCart && (
            <button className="purchase-buttons red">ADD TO CART</button>
          )}
        </div>
      </div>
    );
  }
}

export default ProductPurchase;
