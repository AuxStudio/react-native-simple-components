import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Touchable from '../Touchable';

const propTypes = {
  iconName: PropTypes.string,
  customIcon: PropTypes.node,
  text: PropTypes.string,
  handlePress: PropTypes.func,
  androidRipple: PropTypes.bool,
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool,
  iconStyle: Text.propTypes.style,
  textStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {
  iconName: 'check',
  text: 'IconTextRow',
};

const IconTextRow = ({
  iconName,
  customIcon,
  text,
  handlePress,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  iconStyle,
  textStyle,
  style,
}) => {
  const iconComponent = customIcon || <Icon name={iconName} style={[styles.icon, iconStyle]} />;

  return (
    <Touchable
      onPress={handlePress}
      disabled={!handlePress}
      androidRipple={androidRipple}
      androidRippleColor={androidRippleColor}
      androidRippleBorderless={androidRippleBorderless}
      style={[styles.container, style]}
    >
      {iconComponent}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Touchable>
  );
};

IconTextRow.propTypes = propTypes;
IconTextRow.defaultProps = defaultProps;

export default IconTextRow;
