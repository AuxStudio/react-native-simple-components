import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import DeleteButton from '../';

describe('DeleteButton', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <DeleteButton
          handlePress={jest.fn()}
          showShadow
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
    expect(renderer.create(<DeleteButton />)).toMatchSnapshot();
  });

  it('renders with custom icon', () => {
    expect(
      renderer.create(<DeleteButton customIcon={<MaterialIcon name="check" />} />),
    ).toMatchSnapshot();
  });
});
