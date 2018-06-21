import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import IconTextRow from '../';

describe('IconTextRow', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <IconTextRow
          iconName="check"
          text="Test"
          handlePress={jest.fn()}
          androidRipple
          androidRippleColor="red"
          androidRippleBorderless
          iconStyle={{ color: 'red' }}
          textStyle={{ color: 'red' }}
          style={{ backgroundColor: 'blue' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<IconTextRow />)).toMatchSnapshot();
  });

  it('renders with custom icon', () => {
    expect(
      renderer.create(<IconTextRow customIcon={<MaterialIcon name="check" />} />),
    ).toMatchSnapshot();
  });
});
