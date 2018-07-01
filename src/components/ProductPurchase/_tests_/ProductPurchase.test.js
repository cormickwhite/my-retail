import React from 'react';
import { shallow } from 'enzyme';
import ProductPurchase from '../index.js';

const pickUpInStoreButton = (
  <button className="purchase-buttons black">PICK UP IN STORE</button>
);
const addToCartButton = (
  <button className="purchase-buttons red">ADD TO CART</button>
);

it('shows pick up in store and add to cart when code is 0', () => {
  const productPurchase = shallow(<ProductPurchase purchaseChannelCode="0" />);

  expect(productPurchase.contains(pickUpInStoreButton)).toEqual(true);
  expect(productPurchase.contains(addToCartButton)).toEqual(true);
});

it("doesn't show pick up in store when code is 1", () => {
  const productPurchase = shallow(<ProductPurchase purchaseChannelCode="1" />);

  expect(productPurchase.contains(pickUpInStoreButton)).toEqual(false);
  expect(productPurchase.contains(addToCartButton)).toEqual(true);
});

it("doesn't show add to cart when code is 2", () => {
  const productPurchase = shallow(<ProductPurchase purchaseChannelCode="2" />);

  expect(productPurchase.contains(pickUpInStoreButton)).toEqual(true);
  expect(productPurchase.contains(addToCartButton)).toEqual(false);
});
