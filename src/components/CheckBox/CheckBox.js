import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes, Text } from 'react-native';
import { AnimateScale } from 'react-native-simple-animators';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Touchable from '../Touchable';

const propTypes = {
  isChecked: PropTypes.bool,
  handlePress: PropTypes.func,
  customIcon: PropTypes.node,
  iconStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {};

const CheckBox = ({ isChecked, handlePress, customIcon, iconStyle, style }) => {
  const iconComponent = customIcon || <Icon name="check" style={[styles.icon, iconStyle]} />;

  const checkBoxComponent = isChecked && (
    <AnimateScale initialValue={0} finalValue={1} shouldAnimateIn>
      {iconComponent}
    </AnimateScale>
  );

  return (
    <Touchable onPress={handlePress} disableFeedback style={[styles.container, style]}>
      {checkBoxComponent}
    </Touchable>
  );
};

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
