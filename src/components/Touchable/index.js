import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  ViewPropTypes,
} from 'react-native';

const propTypes = {
  androidRipple: PropTypes.bool, // flag to display android ripple effect
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool, // android ripple will extend beyond object boundaries
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  disableFeedback: PropTypes.bool, // will render TouchableWithoutFeedback
  disabled: PropTypes.bool,
  children: PropTypes.node,
  style: ViewPropTypes.style,
  testID: PropTypes.string,
};

const defaultProps = {};

const Touchable = ({
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  onPress,
  onLongPress,
  disableFeedback,
  disabled,
  children,
  style,
  testID,
}) => {
  let touchableComponent;

  if (androidRipple && Platform.OS === 'android') {
    touchableComponent = (
      <TouchableNativeFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        background={TouchableNativeFeedback.Ripple(androidRippleColor, androidRippleBorderless)}
        disabled={disabled}
        testID={testID}
      >
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  } else if (disableFeedback) {
    touchableComponent = (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        testID={testID}
      >
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
    );
  } else {
    touchableComponent = (
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={style}
        disabled={disabled}
        testID={testID}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return touchableComponent;
};

Touchable.propTypes = propTypes;
Touchable.defaultProps = defaultProps;

export default Touchable;
