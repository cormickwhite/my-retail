import React, { Component } from 'react';
import './App.css';

import ProductTitle from './components/ProductTitle';
import ProductImages from './components/ProductImages';
import ProductPrice from './components/ProductPrice';
import ProductPromotions from './components/ProductPromotions';
import ProductPurchase from './components/ProductPurchase';
import ProductReturns from './components/ProductReturns';

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
            <ProductPromotions promotions={item.Promotions} />
            <ProductPurchase purchaseChannelCode={item.purchasingChannelCode} />
            <ProductReturns />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
