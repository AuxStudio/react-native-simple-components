import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ViewPropTypes, Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../../styleConstants';
import Touchable from '../Touchable';
import StatusBar from '../StatusBar';

const propTypes = {
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

  androidRipple: PropTypes.bool,
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool,

  leftIconStyle: Text.propTypes.style,
  textStyle: Text.propTypes.style,
  rightIconStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
};

const defaultProps = {
  statusBarStyle: 'dark-content',
  statusBarColor: styleConstants.colors.white,
};

const HeaderBar = ({
  showShadow,
  statusBarStyle,
  statusBarColor,
  leftComponent,
  leftIconName,
  handleLeftIconPress,
  textComponent,
  text,
  textLeft,
  textRight,
  handleTextPress,
  rightComponent,
  rightIconName,
  handleRightIconPress,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  leftIconStyle,
  textStyle,
  rightIconStyle,
  style,
  wrapperStyle,
}) => {
  const iOSStyles = Platform.OS === 'ios' && { marginTop: 22 }; // iOSStatusBar
  const showShadowStyles = showShadow && styleConstants.shadows.regular;
  const textLeftStyles = textLeft && {
    alignItems: 'flex-start',
    paddingLeft: styleConstants.dimensions.padding.small,
  };
  const textRightStyles = textRight && { alignItems: 'flex-end' };

  let headerLeftComponent;
  let headerTextComponent;
  let headerRightComponent;

  if (leftComponent) {
    headerLeftComponent = leftComponent;
  } else if (leftIconName) {
    headerLeftComponent = (
      <Touchable
        style={textLeft ? { justifyContent: 'center' } : styles.leftIconContainer}
        onPress={handleLeftIconPress}
        disabled={!handleLeftIconPress}
        androidRipple={androidRipple}
        androidRippleColor={androidRippleColor}
        androidRippleBorderless={androidRippleBorderless}
      >
        <MaterialIcon name={leftIconName} style={[styles.leftIcon, leftIconStyle]} />
      </Touchable>
    );
  } else if (!textLeft) {
    headerLeftComponent = <View style={styles.leftIconContainer} />;
  }

  if (textComponent) {
    headerTextComponent = textComponent;
  } else if (text) {
    headerTextComponent = (
      <Touchable
        style={[styles.textContainer, textLeftStyles, textRightStyles]}
        onPress={handleTextPress}
        disabled={!handleTextPress}
        androidRipple={androidRipple}
        androidRippleColor={androidRippleColor}
        androidRippleBorderless={androidRippleBorderless}
      >
        <Text style={[styles.text, textStyle]} numberOfLines={1}>
          {text}
        </Text>
      </Touchable>
    );
  }

  if (rightComponent) {
    headerRightComponent = rightComponent;
  } else if (rightIconName) {
    headerRightComponent = (
      <Touchable
        style={textRight ? { justifyContent: 'center' } : styles.rightIconContainer}
        onPress={handleRightIconPress}
        disabled={!handleRightIconPress}
        androidRipple={androidRipple}
        androidRippleColor={androidRippleColor}
        androidRippleBorderless={androidRippleBorderless}
      >
        <MaterialIcon name={rightIconName} style={[styles.rightIcon, rightIconStyle]} />
      </Touchable>
    );
  } else if (!textRight) {
    headerRightComponent = <View style={styles.rightIconContainer} />;
  }

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <StatusBar backgroundColor={statusBarColor} barStyle={statusBarStyle} />
      <View style={[styles.container, showShadowStyles, iOSStyles, style]}>
        {headerLeftComponent}
        {headerTextComponent}
        {headerRightComponent}
      </View>
    </View>
  );
};

HeaderBar.propTypes = propTypes;
HeaderBar.defaultProps = defaultProps;

export default HeaderBar;
