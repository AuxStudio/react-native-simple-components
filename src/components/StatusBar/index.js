import React from 'react';
import PropTypes from 'prop-types';
import { View, StatusBar, Platform } from 'react-native';

import styles from './styles';
import styleConstants from '../../styleConstants';

const propTypes = {
  backgroundColor: PropTypes.string,
  barStyle: PropTypes.string,
};

const defaultProps = {
  backgroundColor: styleConstants.colors.white,
  barStyle: 'dark-content',
};

const StatusBarComponent = ({ backgroundColor, barStyle }) => {
  const iosStatusBar = Platform.OS === 'ios' && (
    <View style={[styles.statusBar, { backgroundColor }]} />
  );

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
      {iosStatusBar}
    </View>
  );
};

StatusBarComponent.propTypes = propTypes;
StatusBarComponent.defaultProps = defaultProps;

export default StatusBarComponent;
