import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';

import styles from './styles';

const propTypes = {
  verticalCenter: PropTypes.bool,
  horizontalCenter: PropTypes.bool,
  testing: PropTypes.bool, // stress test at 320 x 480 (our most common style bugs)
  children: PropTypes.node,
  style: ViewPropTypes.style,
  testID: PropTypes.string,
};

const defaultProps = {};

const Page = ({ verticalCenter, horizontalCenter, testing, children, style, testID }) => {
  const verticalCenterStyles = verticalCenter && {
    justifyContent: 'center',
  };
  const horizontalCenterStyles = horizontalCenter && {
    alignItems: 'center',
  };
  const testingStyles = testing && styles.testing;

  return (
    <View
      style={[styles.container, verticalCenterStyles, horizontalCenterStyles, testingStyles, style]}
      testID={testID}
    >
      {children}
    </View>
  );
};

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
