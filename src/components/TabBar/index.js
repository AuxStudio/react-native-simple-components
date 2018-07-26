import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Text, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../../styleConstants';
import Touchable from '../Touchable';

const propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      iconName: PropTypes.string,
      customIcon: PropTypes.node,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  activeTab: PropTypes.string, // active tab title
  activeTabIndex: PropTypes.number, // or if you'd prefer to use tab index
  handlePress: PropTypes.func,
  androidRipple: PropTypes.bool,
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool,
  shouldScrollHorizontally: PropTypes.bool,
  tabWidth: PropTypes.number, // works with shouldScrollHorizontally
  showShadow: PropTypes.bool,
  textColor: PropTypes.string, // both icons and text
  activeTextColor: PropTypes.string, // both icons and text
  iconStyle: Text.propTypes.style,
  textStyle: Text.propTypes.style,
  tabStyle: ViewPropTypes.style,
  activeTabStyle: ViewPropTypes.style,
  disabledTabStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style, // works with shouldScrollHorizonally
  testID: PropTypes.string,

  // used to create the individual tab testIDs, useful if more than one TabBar is present
  tabTestIDPredix: PropTypes.string,
};

const defaultProps = {
  textColor: styleConstants.colors.primaryText,
  activeTextColor: styleConstants.colors.primary,
  tabTestIDPredix: 'tabBar.tab',
};

const TabBar = ({
  tabs,
  activeTab,
  activeTabIndex,
  handlePress,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  shouldScrollHorizontally,
  tabWidth,
  showShadow,
  textColor,
  activeTextColor,
  iconStyle,
  textStyle,
  tabStyle,
  activeTabStyle,
  disabledTabStyle,
  style,
  wrapperStyle,
  testID,
  tabTestIDPredix,
}) => {
  const shadowStyles = showShadow && styleConstants.shadows.regular;

  const tabBarComponent =
    tabs &&
    tabs.map((tab, index) => {
      const isActive = activeTab === tab.title || activeTabIndex === index;

      const color = isActive ? activeTextColor : textColor;
      const colorStyles = {
        color,
      };
      const activeTabStyles = isActive && activeTabStyle;
      const disabledStyles = [];

      if (tab.disabled) {
        disabledStyles.push(styles.disabled);
        // Add the custom disabled style if provided
        if (disabledTabStyle) {
          disabledStyles.push(disabledTabStyle);
        }
      }

      const iconComponent = tab.customIcon
        ? tab.customIcon
        : tab.iconName && (
            <Icon name={tab.iconName} style={[styles.icon, colorStyles, iconStyle]} />
          );

      const titleTextComponent = tab.title && (
        <Text style={[styles.text, colorStyles, textStyle]}>{tab.title}</Text>
      );

      return (
        <Touchable
          key={tab.title}
          onPress={() => handlePress && handlePress(tab)}
          androidRipple={androidRipple}
          androidRippleColor={androidRippleColor}
          androidRippleBorderless={androidRippleBorderless}
          disabled={tab.disabled}
          style={[
            styles.tabContainer,
            {
              width: tabWidth,
            },
            activeTabStyles,
            disabledStyles,
            tabStyle,
          ]}
          testID={`${tabTestIDPredix}.${tab.title}`}
        >
          {iconComponent}
          {titleTextComponent}
        </Touchable>
      );
    });

  const tabBarWrapperComponent = shouldScrollHorizontally ? (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={[styles.scrollWrapper, shadowStyles, wrapperStyle]}
      contentContainerStyle={[styles.scrollContainer, style]}
      testID={testID}
    >
      {tabBarComponent}
    </ScrollView>
  ) : (
    <View style={[styles.container, shadowStyles, style]}>{tabBarComponent}</View>
  );

  return tabBarWrapperComponent;
};

TabBar.propTypes = propTypes;
TabBar.defaultProps = defaultProps;

export default TabBar;
