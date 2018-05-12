import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ViewPropTypes } from 'react-native';

import styles from './styles';
import styleConstants from '../../styleConstants';

const propTypes = {
  count: PropTypes.number,
  showShadow: PropTypes.bool,
  textStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {
  count: 0,
};

const CountIcon = ({ count, showShadow, textStyle, style }) => {
  const shadowStyles = showShadow && styleConstants.shadows.small;

  return (
    <View style={[styles.container, shadowStyles, style]}>
      <Text style={[styles.text, textStyle]}>{count}</Text>
    </View>
  );
};

CountIcon.propTypes = propTypes;
CountIcon.defaultProps = defaultProps;

export default CountIcon;
