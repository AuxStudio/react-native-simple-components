import React from 'react';
import renderer from 'react-test-renderer';

import NotificationIcon from '../NotificationIcon';

it('renders a NotificationIcon', () => {
  expect(renderer.create(<NotificationIcon count={5} showShadow />)).toMatchSnapshot();
});
