import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Touchable from './Touchable';
import Input from './Input';

export default (InputBar = (props) => {
  /*
        PROPTYPES

        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        value: PropTypes.string,
        handleChange: PropTypes.func,
        handleSubmit: PropTypes.func, 
        returnKeyType: PropTypes.string,
        handleFocus: PropTypes.func,
        handleBlur: PropTypes.func,
        multiline: PropTypes.bool,
        autofocus: PropTypes.bool,
        showDeleteButton: PropTypes.bool, // if supplied, will render a delete button to clear the input
        handleRightIconPress: PropTypes.bool,

        leftIconName: PropTypes.string,
        leftIcon: PropTypes.node,
        rightIconName: PropTypes.string,
        rightIcon: PropTypes.node,

        showShadow: PropTypes.bool,
        // leftIconStyle: PropTypes.node,
        // rightIconStyle: PropTypes.node,
        // style: PropTypes.node, // input style
        // containerStyle: PropTypes.node,
        // deleteButtonStyle: PropTypes.node,
        // deleteButtonIconStyle: PropTypes.node,

    */

  const leftIcon = props.leftIcon
    ? props.leftIcon
    : props.leftIconName && (
        <MaterialIcon name={props.leftIconName} style={[styles.icon, props.leftIconStyle]} />
      );

  const rightIcon = props.rightIcon
    ? props.rightIcon
    : props.rightIconName && (
        <MaterialIcon name={props.rightIconName} style={[styles.icon, props.rightIconStyle]} />
      );

  const rightIconComponent = props.rightIconName && (
    <Touchable onPress={props.handleRightIconPress} style={styles.rightIconContainer}>
      {rightIcon}
    </Touchable>
  );

  const shadowStyles = props.showShadow && {
    ...styleConstants.regularShadow,
  };

  return (
    <View style={[styles.container, shadowStyles, props.containerStyle]}>
      <View style={styles.iconContainer}>{leftIcon}</View>
      <View style={styles.inputContainer}>
        <Input
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderTextColor}
          value={props.value}
          handleChange={props.handleChange}
          handleSubmit={props.handleSubmit}
          returnKeyType={props.returnKeyType}
          handleFocus={props.handleFocus}
          handleBlur={props.handleBlur}
          multiline={props.multiline}
          autoFocus={props.autoFocus}
          style={[styles.input, props.style]}
          showDeleteButton={props.showDeleteButton}
          deleteButtonStyle={props.deleteButtonStyle}
          deleteButtonIconStyle={props.deleteButtonIconStyle}
        />
      </View>
      {rightIconComponent}
    </View>
  );
});
