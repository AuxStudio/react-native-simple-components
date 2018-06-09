/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';

import SmartImage from '../SmartImage';

const IMAGE_SOURCE_LOCAL = require('./SmartImage.test.jpg');

const IMAGE_SOURCE_REMOTE = 'https://d3iw72m71ie81c.cloudfront.net/male-47.jpg';

/*
  TODO

  renders image after loading local and hides loader
  renders image after loading remote and hides loader
  loading indefinitely
  loading failed
  offline
*/
it('renders a local SmartImage', () => {
  expect(
    renderer.create(
      <SmartImage
        source={IMAGE_SOURCE_LOCAL}
        iconStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
        loaderColor="green"
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a remote SmartImage', () => {
  expect(renderer.create(<SmartImage source={{ uri: IMAGE_SOURCE_REMOTE }} />)).toMatchSnapshot();
});

it('renders a SmartImage with no props', () => {
  expect(renderer.create(<SmartImage />)).toMatchSnapshot();
});
/* eslint-enable */
