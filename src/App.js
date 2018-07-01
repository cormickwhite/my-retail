import React, { Component } from 'react';
import './App.css';

import ProductTitle from './components/ProductTitle';
import ProductImages from './components/ProductImages';
import ProductPrice from './components/ProductPrice';

import ItemData from './itemData.json';

class App extends Component {
  render() {
    const item = ItemData.CatalogEntryView[0];

    return (
      <div>
        <div className="App-row-container">
          <div className="App-col-contents">
            <ProductTitle title={item.title} />
            <ProductImages images={item.Images} />
          </div>
          <div className="App-col-contents">
            <ProductPrice price={item.Offers[0].OfferPrice[0]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
