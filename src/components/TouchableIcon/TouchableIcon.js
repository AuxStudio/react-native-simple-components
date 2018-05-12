import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default (TouchableIcon = (props) => {
  /*
        PROPTYPES

        iconName: PropTypes.string.isRequired,
        customIcon: PropTypes.node,
        handlePress: PropTypes.func.isRequired,
        handleLongPress: PropTypes.func,
        disabled: PropTypes.string,

        // style: PropTypes.node,
        // iconStyle: PropTypes.node,
        // disabledStyle: PropTypes.node,
    */

  const icon = props.customIcon ? (
    props.customIcon
  ) : (
    <Icon name={props.iconName} style={[styles.icon, props.iconStyle]} />
  );

  const button = props.disabled ? (
    <View
      style={[
        styles.button,
        props.disabledStyle ? props.disabledStyle : styles.disabled,
        props.style,
      ]}
    >
      {icon}
    </View>
  ) : (
    <Touchable
      onPress={props.handlePress}
      onLongPress={props.handleLongPress}
      style={[styles.button, props.style]}
    >
      {icon}
    </Touchable>
  );

  return button;
});
