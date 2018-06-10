import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text } from 'react-native';

import styles from './styles';
import styleConstants from '../../styleConstants';
import ButtonIcon from '../ButtonIcon';

const propTypes = {
  handlePress: PropTypes.func,
  customIcon: PropTypes.node,
  showShadow: PropTypes.bool,
  androidRipple: PropTypes.bool,
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool,
  iconStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {};

const DeleteButton = ({
  handlePress,
  customIcon,
  showShadow,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  iconStyle,
  style,
}) => {
  const shadowStyles = showShadow && styleConstants.shadows.small;

  return (
    <ButtonIcon
      handlePress={handlePress}
      iconName="close"
      customIcon={customIcon}
      androidRipple={androidRipple}
      androidRippleColor={androidRippleColor}
      androidRippleBorderless={androidRippleBorderless}
      iconStyle={[styles.icon, iconStyle]}
      style={[styles.container, shadowStyles, style]}
    />
  );
};

DeleteButton.propTypes = propTypes;
DeleteButton.defaultProps = defaultProps;

export default DeleteButton;
