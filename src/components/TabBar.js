import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Touchable from "./Touchable";

export default (TabBar = props => {
    /* 
        PROPTYPES

        tabs: PropTypes.array.isRequired, eg. [{title: 'Home', iconName: 'home', customIcon: PropTypes.node, disabled: false}]
        activeTab: PropTypes.string,
        handleTabPress: PropTypes.func,
        shouldScrollHorizontally: PropTypes.bool,
        tabWidth: PropTypes.number, // works with above prop

        showShadow: PropTypes.bool,
        textColor: PropTypes.node, // both icons and text
        activeTextColor: PropTypes.node, // both icons and text
        // style: PropTypes.node,
        // iconStyle: PropTypes.node,
        // textStyle: PropTypes.node,
        // tabStyle: PropTypes.node,
        // activeTabStyle: PropTypes.node,
        // disabledStyle: PropTypes.node,
        // style: PropTypes.node,

    */

    const tabs =
        props.tabs &&
        props.tabs.map(value => {
            const colorStyles = {
                color:
                    props.activeTab === value.title
                        ? props.activeTextColor
                          ? props.activeTextColor
                          : styleConstants.primaryText
                        : props.textColor
                          ? props.textColor
                          : styleConstants.secondaryText,
            };

            const iconComponent = value.customIcon
                ? value.customIcon
                : value.iconName && (
                      <MaterialIcon
                          name={value.iconName}
                          style={[styles.icon, colorStyles, props.iconStyle]}
                      />
                  );

            const icon = iconComponent && (
                <View style={styles.iconContainer}>{iconComponent}</View>
            );

            const title = value.title && (
                <Text style={[styles.text, colorStyles, props.textStyle]}>
                    {value.title}
                </Text>
            );

            const activeTabStyle =
                props.activeTab === value.title && props.activeTabStyle;

            const tab = value.disabled ? (
                <View
                    style={[
                        styles.tabContainer,
                        styles.disabled,
                        {
                            width: props.tabWidth,
                        },
                        props.tabStyle,
                        props.disabledStyle,
                    ]}
                    key={"tab-" + value.title}>
                    {icon}
                    {title}
                </View>
            ) : (
                <Touchable
                    onPress={() => props.handleTabPress(value.title)}
                    style={[
                        styles.tabContainer,
                        {
                            width: props.tabWidth,
                        },
                        props.tabStyle,
                        activeTabStyle,
                    ]}
                    key={"tab-" + value.title}>
                    {icon}
                    {title}
                </Touchable>
            );

            return tab;
        });

    const shadowStyles = props.showShadow && {
        ...styleConstants.regularShadow,
    };

    const tabBar = props.shouldScrollHorizontally ? (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={[styles.scrollWrapper, shadowStyles]}
            contentContainerStyle={[styles.scrollContainer, props.style]}>
            {tabs}
        </ScrollView>
    ) : (
        <View style={[styles.container, shadowStyles, props.style]}>
            {tabs}
        </View>
    );

    return tabBar;
});

const styles = StyleSheet.create({
    scrollWrapper: {
        maxHeight: 56,
    },
    scrollContainer: {
        height: 56,
    },
    container: {
        height: 56,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    tabContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
    },
    iconContainer: {
        paddingHorizontal: 16,
        position: "relative",
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.secondaryText,
    },
    text: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.secondaryText,
        marginTop: 2,
        textAlign: "center",
    },
    disabled: {
        opacity: 0.33,
    },
});
