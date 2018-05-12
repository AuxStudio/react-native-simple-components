import React from 'react';
import PropTypes from 'prop-types';
import { Text, ViewPropTypes } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../../styleConstants';
import Touchable from '../Touchable';

const propTypes = {
  iconName: PropTypes.string,
  customIcon: PropTypes.node,
  handlePress: PropTypes.func,
  disabled: PropTypes.bool,
  showShadow: PropTypes.bool,
  androidRipple: PropTypes.bool,
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool,
  iconStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {
  iconName: 'add',
};

const ButtonIcon = ({
  iconName,
  customIcon,
  handlePress,
  disabled,
  showShadow,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  iconStyle,
  style,
}) => {
  const shadowStyles = showShadow && styleConstants.shadows.regular;

  const iconComponent = customIcon || (
    <MaterialIcon name={iconName} style={[styles.icon, iconStyle]} />
  );

  return (
    <Touchable
      onPress={handlePress}
      style={[styles.button, shadowStyles, style]}
      disabled={disabled}
      androidRipple={androidRipple}
      androidRippleColor={androidRippleColor}
      androidRippleBorderless={androidRippleBorderless}
    >
      {iconComponent}
    </Touchable>
  );
};

ButtonIcon.propTypes = propTypes;
ButtonIcon.defaultProps = defaultProps;

export default ButtonIcon;
