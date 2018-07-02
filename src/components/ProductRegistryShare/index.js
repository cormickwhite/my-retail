import React, { Component } from 'react';

class ProductRegistryShare extends Component {
  render() {
    return (
      <div className="button-container registry">
        <button className="registry-buttons">ADD TO REGISTRY</button>
        <button className="registry-buttons">ADD TO LIST</button>
        <button className="registry-buttons">SHARE</button>
      </div>
    );
  }
}

export default ProductRegistryShare;
