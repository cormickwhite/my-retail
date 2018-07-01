import React, { Component } from 'react';
import './App.css';

import ProductTitle from './components/ProductTitle';

import ItemData from './itemData.json';

class App extends Component {
  render() {
    const item = ItemData.CatalogEntryView[0];

    return (
      <div>
        <div className="App-row-container">
          <div className="App-col-contents">
            <ProductTitle title={item.title} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
