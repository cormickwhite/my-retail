import React from 'react';
import { shallow } from 'enzyme';
import ProductTitle from '../index';

describe('ProductTitle component', () => {
  let props;

  beforeEach(() => {
    props = {
      title: 'Something with Something'
    };
  });

  it('renders', () => {
    shallow(<ProductTitle {...props} />);
  });

  it('splits a title on "with"', () => {
    const wrapper = shallow(<ProductTitle {...props} />);

    setTimeout(() => {
      expect(
        wrapper
          .find('div')
          .at(1)
          .text()
          .to.equal('Something')
      );
      expect(
        wrapper
          .find('div')
          .at(2)
          .text()
          .to.equal('with Something')
      );
    });
  });
});
