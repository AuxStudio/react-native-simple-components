import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function IconTextRow(props) {
  /*
    static get propTypes() {
        return {
            iconName: PropTypes.string,
            text: PropTypes.string,

            iconStyle: PropTypes.node,
            textStyle: PropTypes.node,
            style: PropTypes.node,
        };
    }
*/

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.iconContainer}>
        <Icon name={props.iconName} style={[styles.icon, props.iconStyle]} />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
      </View>
    </View>
  );
}
