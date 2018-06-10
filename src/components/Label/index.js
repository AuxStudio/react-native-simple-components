import React from 'react';
import PropTypes from 'prop-types';
import { Text, ViewPropTypes } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../../styleConstants';
import Touchable from '../Touchable';

const propTypes = {
  handlePress: PropTypes.func,
  iconName: PropTypes.string,
  customIcon: PropTypes.node,
  text: PropTypes.string,
  showShadow: PropTypes.bool,
  textStyle: Text.propTypes.style,
  iconStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {
  text: 'Label',
};

const Label = ({
  handlePress,
  iconName,
  customIcon,
  text,
  showShadow,
  textStyle,
  iconStyle,
  style,
}) => {
  const shadowStyles = showShadow && styleConstants.shadows.small;

  const iconComponent = customIcon || (
    <MaterialIcon name={iconName} style={[styles.icon, iconStyle]} />
  );

  return (
    <Touchable
      onPress={handlePress}
      disabled={!handlePress}
      style={[styles.container, shadowStyles, style]}
    >
      {iconComponent}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Touchable>
  );
};

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
