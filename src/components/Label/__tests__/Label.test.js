import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Label from '../';

describe('Label', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <Label
          handlePress={jest.fn()}
          iconName="check"
          text="Test"
          showShadow
          iconStyle={{ color: 'red' }}
          textStyle={{ color: 'red' }}
          style={{ backgroundColor: 'blue' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<Label />)).toMatchSnapshot();
  });

  it('renders with custom icon', () => {
    expect(renderer.create(<Label customIcon={<MaterialIcon name="check" />} />)).toMatchSnapshot();
  });
});
