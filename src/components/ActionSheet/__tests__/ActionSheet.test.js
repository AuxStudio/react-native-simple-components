import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => 'Animator');

import ActionSheet from '../'; // eslint-disable-line

const OPTIONS = [{ iconName: 'check', text: 'Test 1' }, { iconName: 'close', text: 'Test 2' }];

describe('ActionSheet', () => {
  it('renders with all props', () => {
    const component = renderer.create(
      <ActionSheet
        options={OPTIONS}
        handlePress={jest.fn()}
        rowHeight={100}
        textStyle={{ color: 'red' }}
        iconStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<ActionSheet />)).toMatchSnapshot();
  });

  it('renders and selects a menu item', (done) => {
    const handlePress = jest.fn();
    const component = renderer.create(
      <ActionSheet
        options={OPTIONS}
        handlePress={handlePress}
        rowHeight={100}
        textStyle={{ color: 'red' }}
        iconStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
      />,
    );
    const instance = component.getInstance();

    instance.handleSelect(OPTIONS[0]);
    expect(instance.state.shouldAnimateOut).toBe(true);

    setTimeout(() => {
      expect(handlePress).toMatchSnapshot();

      done();
    }, 500);
  });
});
