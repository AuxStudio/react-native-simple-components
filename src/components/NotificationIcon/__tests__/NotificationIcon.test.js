import React from 'react';
import renderer from 'react-test-renderer';

import NotificationIcon from '../NotificationIcon';

it('renders a NotificationIcon', () => {
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

it('renders a NotificationIcon with no props', () => {
  expect(renderer.create(<NotificationIcon />)).toMatchSnapshot();
});
