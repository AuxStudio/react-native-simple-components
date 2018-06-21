import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import Button from '../';

describe('Button', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <Button
          iconName="check"
          text="Test"
          handlePress={jest.fn()}
          androidRipple
          androidRippleColor="red"
          androidRippleBorderless
          showShadow
          disabled
          textStyle={{ color: 'red' }}
          iconContainerStyle={{ backgroundColor: 'green' }}
          iconStyle={{ color: 'red' }}
          style={{ backgroundColor: 'blue' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with text left and icon right', () => {
    expect(
      renderer.create(<Button iconName="check" iconRight text="Test" textLeft />),
    ).toMatchSnapshot();
  });

  it('renders with a customIcon', () => {
    expect(
      renderer.create(<Button customIcon={<MaterialIcon name="check" />} />),
    ).toMatchSnapshot();
  });

  it('renders with a loader', () => {
    expect(renderer.create(<Button showLoader loaderColor="red" />)).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<Button />)).toMatchSnapshot();
  });
});
