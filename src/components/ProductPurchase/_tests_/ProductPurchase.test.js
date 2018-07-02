import React from 'react';
import { shallow } from 'enzyme';
import ProductPurchase from '../index.js';

describe('available ProductPurchase buttons', () => {
  const pickUpInStoreButton = (
    <button className="purchase-buttons black">PICK UP IN STORE</button>
  );
  const addToCartButton = (
    <button className="purchase-buttons red">ADD TO CART</button>
  );

  it('shows pick up in store and add to cart when code is 0', () => {
    const wrapper = shallow(<ProductPurchase purchaseChannelCode="0" />);

    expect(wrapper.contains(pickUpInStoreButton)).toEqual(true);
    expect(wrapper.contains(addToCartButton)).toEqual(true);
  });

  it("doesn't show pick up in store when code is 1", () => {
    const wrapper = shallow(<ProductPurchase purchaseChannelCode="1" />);

    expect(wrapper.contains(pickUpInStoreButton)).toEqual(false);
    expect(wrapper.contains(addToCartButton)).toEqual(true);
  });

  it("doesn't show add to cart when code is 2", () => {
    const wrapper = shallow(<ProductPurchase purchaseChannelCode="2" />);

    expect(wrapper.contains(pickUpInStoreButton)).toEqual(true);
    expect(wrapper.contains(addToCartButton)).toEqual(false);
  });
});

describe('quantity', () => {
  it('increases quantity', () => {
    const wrapper = shallow(<ProductPurchase purchaseChannelCode="0" />);

    wrapper.instance().increaseQuantity();

    expect(wrapper.state('quantity')).toEqual(2);
  });

  it('decreases quantity', () => {
    const wrapper = shallow(<ProductPurchase purchaseChannelCode="0" />);

    wrapper.setState({ quantity: 5 });
    wrapper.instance().decreaseQuantity();

    expect(wrapper.state('quantity')).toEqual(4);
  });

  it("doesn't decrease quantity if 1", () => {
    const wrapper = shallow(<ProductPurchase purchaseChannelCode="0" />);

    wrapper.instance().decreaseQuantity();

    expect(wrapper.state('quantity')).toEqual(1);
  });
});
