import React from 'react';
import renderer from 'react-test-renderer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import TabBar from '../';

const TABS = [
  {
    title: 'Home',
    iconName: 'home',
  },
  {
    title: 'Profile',
    iconName: 'person',
    disabled: true,
  },
];
const ACTIVE_TAB = 'Home';

describe('TabBar', () => {
  it('renders with all props', () => {
    expect(
      renderer.create(
        <TabBar
          tabs={TABS}
          activeTab={ACTIVE_TAB}
          handlePress={jest.fn()}
          androidRipple
          androidRippleColor="red"
          androidRippleBorderless
          showShadow
          textColor="red"
          activeTextColor="blue"
          iconStyle={{ color: 'red' }}
          textStyle={{ color: 'red' }}
          tabStyle={{ backgroundColor: 'blue' }}
          activeTabStyle={{ backgroundColor: 'green' }}
          disabledTabStyle={{ backgroundColor: 'purple' }}
          style={{ backgroundColor: 'orange' }}
          wrapperStyle={{ backgroundColor: 'pink' }}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders with minimum required props', () => {
    expect(renderer.create(<TabBar tabs={TABS} activeTab={ACTIVE_TAB} />)).toMatchSnapshot();
  });

  it('renders with customIcon', () => {
    expect(
      renderer.create(
        <TabBar
          tabs={[
            {
              title: 'Home',
              customIcon: <MaterialIcon name="check" />,
            },
          ]}
          activeTab={ACTIVE_TAB}
        />,
      ),
    ).toMatchSnapshot();
  });

  it('renders horizontally', () => {
    expect(
      renderer.create(
        <TabBar tabs={TABS} activeTab={ACTIVE_TAB} shouldScrollHorizontally tabWidth={200} />,
      ),
    ).toMatchSnapshot();
  });
});
