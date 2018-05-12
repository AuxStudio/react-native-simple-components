import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Touchable from './Touchable';

export default (Button = (props) => {
  /*
        PROPTYPES

        iconName: PropTypes.string,
        customIcon: PropTypes.node, 
        iconRight: PropTypes.bool,
        text: PropTypes.string.isRequired,
        textLeft: PropTypes.bool, // moves text left
        handlePress: PropTypes.func.isRequired,
        disabled: PropTypes.string,
        showLoader: PropTypes.bool, // will display an ActivityIndicator
        loaderColor: PropTypes.string,

        androidRipple: PropTypes.bool,
        androidRippleColor: PropTypes.string,
        showShadow: PropTypes.bool,
        // style: PropTypes.node,
        // iconStyle: PropTypes.node,
        // textStyle: PropTypes.node,
        // disabledStyle: PropTypes.node,
    */

  const textLeftContainerStyles = props.textLeft && styles.textLeftContainer;
  const textLeftIconStyles = props.textLeft && styles.textLeftIcon;

  const iconRightStyles = props.iconRight && styles.iconRight;

  const icon =
    !props.showLoader && props.customIcon ? (
      props.customIcon
    ) : props.iconName ? (
      <MaterialIcon
        name={props.iconName}
        style={[styles.icon, textLeftIconStyles, iconRightStyles, props.iconStyle]}
      />
    ) : null;

  const shadowStyles = props.showShadow && {
    ...styleConstants.smallShadow,
  };

  const text = !props.showLoader ? (
    <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
  ) : null;

  const loader = props.showLoader && <ActivityIndicator size="small" color={props.loaderColor} />;

  const button = props.disabled ? (
    <View
      style={[
        styles.button,
        props.disabledStyle ? props.disabledStyle : styles.disabled,
        shadowStyles,
        textLeftContainerStyles,
        props.style,
      ]}
    >
      {icon}
      {text}
      {loader}
    </View>
  ) : (
    <Touchable
      onPress={props.handlePress}
      style={[styles.button, shadowStyles, textLeftContainerStyles, props.style]}
      androidRipple={props.androidRipple}
      androidRippleColor={props.androidRippleColor}
    >
      {icon}
      {text}
      {loader}
    </Touchable>
  );

  return button;
});
