/* eslint-disable import/first */
import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => ({
  AnimateTranslateY: 'AnimateTranslateY',
}));

import ActionSheet from '../src/components/ActionSheet';

it('renders a ActionSheet', () => {
  expect(
    renderer.create(
      <ActionSheet
        options={[{ iconName: 'check', text: 'Test 1' }, { iconName: 'close', text: 'Test 2' }]}
        handlePress={jest.fn()}
      />,
    ),
  ).toMatchSnapshot();
});

it('renders a ActionSheet with rowHeight', () => {
  expect(
    renderer.create(<ActionSheet handlePress={jest.fn()} rowHeight={100} />),
  ).toMatchSnapshot();
});

it('renders a ActionSheet with no props', () => {
  expect(renderer.create(<ActionSheet />)).toMatchSnapshot();
});
/* eslint-enable */
