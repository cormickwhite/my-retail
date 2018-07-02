import React from 'react';
import { shallow } from 'enzyme';
import ProductHighlights from '../index.js';

it('renders html features', () => {
  const features = [
    '<strong>Painter:</strong> Bob Ross',
    '<strong>Brushes Included:</strong> 3 ',
    '<strong>Paints Included:</strong> 7',
    '<strong>Includes:</strong> Paint'
  ];

  const wrapper = shallow(<ProductHighlights highlights={features} />);

  expect(wrapper).toMatchSnapshot();
});
