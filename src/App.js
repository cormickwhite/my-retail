import React, { Component } from 'react';
import './App.css';

import ProductTitle from './components/ProductTitle';
import ProductImages from './components/ProductImages';
import ProductPrice from './components/ProductPrice';
import ProductPromotions from './components/ProductPromotions';
import ProductPurchase from './components/ProductPurchase';
import ProductReturns from './components/ProductReturns';
import ProductRegistryShare from './components/ProductRegistryShare';
import ProductHighlights from './components/ProductHighlights';
import ProductReviews from './components/ProductReviews';

import { requestItems } from './services/itemsService';

import isEmpty from 'lodash/isEmpty';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {}
    };
  }

  componentDidMount() {
    this.setState({
      item: requestItems()
    });
  }

  render() {
    const { item } = this.state;

    return (
      <div>
        {!isEmpty(item) && (
          <div>
            <div className="App-row-container">
              <div className="App-col-contents">
                <ProductTitle title={item.title} />
                <ProductImages images={item.Images} />
              </div>
              <div className="App-col-contents">
                <ProductPrice price={item.Offers[0].OfferPrice[0]} />
                <ProductPromotions promotions={item.Promotions} />
                <ProductPurchase
                  purchaseChannelCode={item.purchasingChannelCode}
                />
                <ProductReturns />
                <ProductRegistryShare />
                <ProductHighlights
                  highlights={item.ItemDescription[0].features}
                />
              </div>
            </div>
            <div className="App-row-container">
              <div className="App-col-contents">
                <ProductReviews reviews={item.CustomerReview[0]} />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
