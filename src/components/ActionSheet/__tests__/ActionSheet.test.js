import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => ({
  AnimateTranslateY: 'AnimateTranslateY',
}));

import ActionSheet from '../'; // eslint-disable-line

describe('ActionSheet', () => {
  it('renders with all props', () => {
    const component = renderer.create(
      <ActionSheet
        options={[{ iconName: 'check', text: 'Test 1' }, { iconName: 'close', text: 'Test 2' }]}
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

  // it('renders and selects a menu item', () => {
  //   const component = renderer.create(
  //     <ActionSheet
  //       options={[{ iconName: 'check', text: 'Test 1' }, { iconName: 'close', text: 'Test 2' }]}
  //       handlePress={jest.fn()}
  //       rowHeight={100}
  //       textStyle={{ color: 'red' }}
  //       iconStyle={{ color: 'red' }}
  //       style={{ backgroundColor: 'blue' }}
  //     />,
  //   );
  //   const instance = component.getInstance();

  //   instance.handleSelect({ iconName: 'check', text: 'Test 1' });
  //   expect(instance.state.shouldAnimateOut).toBe(true);
  // });
});
