import React, { Component } from 'react';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

class ProductPromotions extends Component {
  render() {
    const { promotions } = this.props;
    return (
      <div className="component">
        <div className="top-divider" />
        <div className="target-red" style={{ paddingTop: 5, paddingBottom: 5 }}>
          {promotions.map((promo, index) => {
            return (
              <div key={index} style={{ paddingTop: 5, paddingBottom: 5 }}>
                <FontAwesomeIcon
                  icon={faTag}
                  className="target-red"
                  style={{ paddingRight: 10 }}
                />
                {promo.Description[0].shortDescription}
              </div>
            );
          })}
        </div>
        <div className="bottom-divider" />
      </div>
    );
  }
}

export default ProductPromotions;
