import React from 'react';
import { View, StatusBar, Platform } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

export default function StatusBarComponent(props) {
  /*
    static get propTypes() {
        return {
            backgroundColor: PropTypes.string,
            barStyle: PropTypes.string,
        };
    }
    */

  const iosStatusBar = Platform.OS === 'ios' && (
    <View style={[styles.statusBar, { backgroundColor: props.backgroundColor }]} />
  );

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={props.backgroundColor} barStyle={props.barStyle} />
      {iosStatusBar}
    </View>
  );
}
