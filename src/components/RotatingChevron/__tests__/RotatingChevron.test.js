import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('react-native-simple-animators', () => ({
  AnimateRotate: 'AnimateRotate',
}));

import RotatingChevron from '../'; // eslint-disable-line

describe('RotatingChevron', () => {
  it('renders with all props', () => {
    const component = renderer.create(
      <RotatingChevron
        handlePress={jest.fn()}
        androidRipple
        androidRippleColor="red"
        androidRippleBorderless
        showShadow
        iconStyle={{ color: 'red' }}
        style={{ backgroundColor: 'blue' }}
        wrapperStyle={{ backgroundColor: 'green' }}
      />,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<RotatingChevron />)).toMatchSnapshot();
  });

  // it('renders and toggles rotate', () => {
  //   const component = renderer.create(
  //     <RotatingChevron
  //       handlePress={jest.fn()}
  //       androidRipple
  //       androidRippleColor="red"
  //       androidRippleBorderless
  //       showShadow
  //       iconStyle={{ color: 'red' }}
  //       style={{ backgroundColor: 'blue' }}
  //       wrapperStyle={{ backgroundColor: 'green' }}
  //     />,
  //   );
  //   const instance = component.getInstance();
  //   instance.toggleRotate();
  //   expect(instance.state.shouldRotate).toBe(true);
  // });
});
