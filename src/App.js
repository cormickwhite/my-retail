import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

import { fetchItem } from './store/items/actionCreator';

import ProductTitle from './components/ProductTitle';
import ProductImages from './components/ProductImages';
import ProductPrice from './components/ProductPrice';
import ProductPromotions from './components/ProductPromotions';
import ProductPurchase from './components/ProductPurchase';
import ProductReturns from './components/ProductReturns';
import ProductRegistryShare from './components/ProductRegistryShare';
import ProductHighlights from './components/ProductHighlights';
import ProductReviews from './components/ProductReviews';

import isEmpty from 'lodash/isEmpty';

export class App extends Component {
  componentDidMount() {
    this.props.fetchItem();
  }

  render() {
    const { item } = this.props;

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

const mapDispatchToProps = { fetchItem };

function mapStateToProps(state) {
  return {
    item: state.items.item
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
