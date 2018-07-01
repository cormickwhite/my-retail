import React, { Component } from 'react';
import './App.css';

import ProductTitle from './components/ProductTitle';
import ProductImages from './components/ProductImages';

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
        </div>
      </div>
    );
  }
}

export default App;
