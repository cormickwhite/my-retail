import React, { Component } from 'react';

class ProductHighlights extends Component {
  render() {
    const { highlights } = this.props;
    return (
      <div className="component">
        <h1>product highlights</h1>
        {highlights.map((highlight, index) => {
          return (
            <li key={index} dangerouslySetInnerHTML={{ __html: highlight }} />
          );
        })}
      </div>
    );
  }
}

export default ProductHighlights;
