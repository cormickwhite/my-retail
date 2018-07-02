import React from 'react';
import { shallow } from 'enzyme';
import ProductImages from '../index.js';

describe('ProductImages', () => {
  let props;

  beforeEach(() => {
    props = {
      images: [
        {
          AlternateImages: [
            {
              image: 'http://target.scene7.com/is/image/Target/14263758_Alt01'
            },
            {
              image: 'http://target.scene7.com/is/image/Target/14263758_Alt02'
            },
            {
              image: 'http://target.scene7.com/is/image/Target/14263758_Alt03'
            },
            {
              image: 'http://target.scene7.com/is/image/Target/14263758_Alt04'
            },
            {
              image: 'http://target.scene7.com/is/image/Target/14263758_Alt05'
            },
            {
              image: 'http://target.scene7.com/is/image/Target/14263758_Alt06'
            },
            {
              image: 'http://target.scene7.com/is/image/Target/14263758_Alt07'
            }
          ],
          PrimaryImage: [
            {
              image: 'http://target.scene7.com/is/image/Target/14263758'
            }
          ]
        }
      ]
    };
  });

  it('renders', () => {
    const wrapper = shallow(<ProductImages {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('handles nextImage', () => {
    const wrapper = shallow(<ProductImages {...props} />);

    wrapper.instance().nextImage();

    expect(wrapper.state('previousImageIndex')).toEqual(0);
    expect(wrapper.state('currentImageIndex')).toEqual(1);
    expect(wrapper.state('nextImageIndex')).toEqual(2);
  });

  it('handles previousImage', () => {
    const wrapper = shallow(<ProductImages {...props} />);

    wrapper.instance().previousImage();

    expect(wrapper.state('previousImageIndex')).toEqual(6);
    expect(wrapper.state('currentImageIndex')).toEqual(7);
    expect(wrapper.state('nextImageIndex')).toEqual(0);
  });
});
