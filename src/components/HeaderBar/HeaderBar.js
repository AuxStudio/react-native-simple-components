import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { AnimateOpacity } from 'react-native-simple-animators';
import Touchable from './Touchable';

export default (HeaderBar = (props) => {
  /* 
        PROPTYPES
    
        showShadow: PropTypes.bool,
        statusBarStyle: PropTypes.string, // dark-content or light-content
        statusBarColor: PropTypes.string,

        leftComponent: PropTypes.node,
        leftIconName: PropTypes.string,
        handleLeftIconPress: PropTypes.func,

        textComponent: PropTypes.node,
        text: PropTypes.string,
        textLeft: PropTypes.bool, // aligns text left
        textRight: PropTypes.bool, // aligns text right
        handleTextPress: PropTypes.func,

        rightComponent: PropTypes.node,
        rightIconName: PropTypes.string,
        handleRightIconPress: PropTypes.func,

        // leftIconStyle: PropTypes.node,
        // textStyle: PropTypes.node,
        // rightIconStyle: PropTypes.node,
        // style: PropTypes.node,
        // wrapperStyle: PropTypes.node
    */

  const showShadowStyles = props.showShadow && styleConstants.regularShadow;

  const leftIcon = props.leftComponent ? (
    <View style={styles.leftIconContainer}>{props.leftComponent}</View>
  ) : props.leftIconName ? (
    <Touchable
      style={props.textLeft ? { justifyContent: 'center' } : styles.leftIconContainer}
      onPress={props.handleLeftIconPress}
    >
      <MaterialIcon name={props.leftIconName} style={[styles.leftIcon, props.leftIconStyle]} />
    </Touchable>
  ) : props.textLeft ? null : (
    <View style={styles.leftIconContainer} />
  );

  const textLeftStyles = props.textLeft
    ? {
        alignItems: 'flex-start',
        paddingLeft: 8,
      }
    : null;

  const textRightStyles = props.textRight ? { alignItems: 'flex-end' } : null;

  const text = props.textComponent ? (
    props.textComponent
  ) : props.handleTextPress ? (
    <Touchable
      style={[styles.textContainer, textLeftStyles, textRightStyles]}
      onPress={props.handleTextPress}
    >
      <Text style={[styles.text, props.textStyle]} numberOfLines={1}>
        {props.text}
      </Text>
    </Touchable>
  ) : !props.text ? null : (
    <View style={[styles.textContainer, textLeftStyles, textRightStyles]}>
      <Text style={[styles.text, props.textStyle]} numberOfLines={1}>
        {props.text}
      </Text>
    </View>
  );

  const rightIcon = props.rightComponent ? (
    <View style={styles.rightIconContainer}>{props.rightComponent}</View>
  ) : props.rightIconName ? (
    <Touchable style={styles.rightIconContainer} onPress={props.handleRightIconPress}>
      <MaterialIcon name={props.rightIconName} style={[styles.rightIcon, props.rightIconStyle]} />
    </Touchable>
  ) : props.textRight ? null : (
    <View style={styles.rightIconContainer} />
  );

  return (
    <View style={[styles.wrapper, props.wrapperStyle]}>
      <StatusBar
        backgroundColor={
          props.statusBarColor ? props.statusBarColor : styleConstants.darkTransPrimary
        }
        barStyle={props.statusBarStyle ? props.statusBarStyle : 'light-content'}
      />
      <View style={[styles.container, showShadowStyles, iosStyles, props.style]}>
        {leftIcon}
        {text}
        {rightIcon}
      </View>
    </View>
  );
});
