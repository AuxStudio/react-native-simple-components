import React from 'react';
import renderer from 'react-test-renderer';

import NotificationIcon from '../';

describe('NotificationIcon', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <NotificationIcon
          count={5}
          showShadow
          textStyle={{ color: 'red' }}
          style={{ backgroundColor: 'blue' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<NotificationIcon />)).toMatchSnapshot();
  });
});
