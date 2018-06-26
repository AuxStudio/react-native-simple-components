import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

jest.mock('react-native-simple-animators', () => 'Animator');

import CheckBox from '../'; // eslint-disable-line

describe('CheckBox', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <CheckBox
          isChecked
          handlePress={jest.fn()}
          androidRipple
          androidRippleColor="red"
          androidRippleBorderless
          iconStyle={{ color: 'red' }}
          style={{ backgroundColor: 'blue' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<CheckBox />)).toMatchSnapshot();
  });

  it('renders with a customIcon', () => {
    expect(
      renderer.create(<CheckBox customIcon={<MaterialIcon name="check" />} />),
    ).toMatchSnapshot();
  });
});
