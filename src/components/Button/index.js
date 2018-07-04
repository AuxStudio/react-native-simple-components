import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ActivityIndicator, ViewPropTypes } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../../styleConstants';
import Touchable from '../Touchable';

const propTypes = {
  iconName: PropTypes.string,
  customIcon: PropTypes.node,
  iconRight: PropTypes.bool,
  text: PropTypes.string,
  textLeft: PropTypes.bool, // moves text left
  handlePress: PropTypes.func,
  disabled: PropTypes.bool,
  showLoader: PropTypes.bool, // will display an ActivityIndicator
  loaderColor: PropTypes.string,
  androidRipple: PropTypes.bool,
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool,
  showShadow: PropTypes.bool,
  style: ViewPropTypes.style,
  iconContainerStyle: ViewPropTypes.style,
  iconStyle: Text.propTypes.style,
  textStyle: Text.propTypes.style,
  testID: PropTypes.string,
};

const defaultProps = {
  text: 'Button',
};

const Button = ({
  iconName,
  customIcon,
  iconRight,
  text,
  textLeft,
  handlePress,
  disabled,
  showLoader,
  loaderColor,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  showShadow,
  style,
  iconContainerStyle,
  iconStyle,
  textStyle,
  testID,
}) => {
  const textLeftContainerStyles = textLeft && styles.textLeftContainer;
  const textLeftIconStyles = textLeft && !iconRight && styles.textLeftIcon;
  const iconRightStyles = iconRight && styles.iconRight;
  const shadowStyles = showShadow && styleConstants.shadows.small;

  let iconComponent;

  if (!showLoader && customIcon) {
    iconComponent = (
      <View style={[styles.iconContainer, textLeftIconStyles, iconRightStyles, iconContainerStyle]}>
        {customIcon}
      </View>
    );
  } else if (iconName) {
    iconComponent = (
      <View style={[styles.iconContainer, textLeftIconStyles, iconRightStyles, iconContainerStyle]}>
        <MaterialIcon name={iconName} style={[styles.icon, iconStyle]} />
      </View>
    );
  }

  const textComponent = !showLoader ? <Text style={[styles.text, textStyle]}>{text}</Text> : null;

  const loaderComponent = showLoader && <ActivityIndicator size="small" color={loaderColor} />;

  return (
    <Touchable
      onPress={handlePress}
      style={[styles.button, shadowStyles, textLeftContainerStyles, style]}
      androidRipple={androidRipple}
      androidRippleColor={androidRippleColor}
      androidRippleBorderless={androidRippleBorderless}
      disabled={disabled}
      testID={testID}
    >
      {iconComponent}
      {textComponent}
      {loaderComponent}
    </Touchable>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
