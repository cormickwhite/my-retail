import React, { Component } from 'react';
import '../../App.css';
import split from 'lodash/split';

class ProductTitle extends Component {
  render() {
    const { title } = this.props;
    const titleArray = split(title, 'with', 2);

    return (
      <div className="title-container">
        <div>{titleArray[0]}</div>
        <div>with {titleArray[1]}</div>
      </div>
    );
  }
}

export default ProductTitle;
