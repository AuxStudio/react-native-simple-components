import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ButtonIcon from '../';

describe('ButtonIcon', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <ButtonIcon
          iconName="check"
          handlePress={jest.fn()}
          androidRipple
          androidRippleColor="red"
          androidRippleBorderless
          showShadow
          disabled
          iconStyle={{ color: 'red' }}
          style={{ backgroundColor: 'blue' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<ButtonIcon />)).toMatchSnapshot();
  });

  it('renders with a customIcon', () => {
    expect(
      renderer.create(<ButtonIcon customIcon={<MaterialIcon name="check" />} />),
    ).toMatchSnapshot();
  });
});
