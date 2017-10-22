import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    container: {
        ...styleConstants.regularShadow,
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
    },
    text: {
        fontSize: styleConstants.smallFont,
        marginTop: 2,
    },
    disabled: {
        opacity: 0.33,
    },
});

export default (TabBar = props => {
    /* 
        PROPTYPES

        tabs: PropTypes.array.isRequired, eg. [{title: 'Home', iconName: 'home', customIcon: PropTypes.node, disabled: false, active: true}]
        handleTabPress: PropTypes.func,

        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        activeTextColor: PropTypes.string,

    */

    const tabs =
        props.tabs &&
        props.tabs.map(value => {
            const colorStyles = {
                color: value.active
                    ? props.activeTextColor
                      ? props.activeTextColor
                      : styleConstants.white
                    : props.textColor
                      ? props.textColor
                      : styleConstants.darkTransWhite,
            };

            const iconComponent = value.customIcon
                ? value.customIcon
                : value.iconName && (
                      <MaterialIcon
                          name={value.iconName}
                          style={[styles.icon, colorStyles]}
                      />
                  );

            const icon = (
                <View style={styles.iconContainer}>{iconComponent}</View>
            );

            const title = value.title && (
                <Text style={[styles.text, colorStyles]}>{value.title}</Text>
            );

            const tab = value.disabled ? (
                <View
                    style={[styles.tabContainer, styles.disabled]}
                    key={"tab-" + value.title}>
                    {icon}
                    {title}
                </View>
            ) : (
                <Touchable
                    onPress={props.handleTabPress}
                    style={styles.tabContainer}
                    key={"tab-" + value.title}>
                    {icon}
                    {title}
                </Touchable>
            );

            return tab;
        });

    const containerStyles = {
        backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : styleConstants.primary,
        ...props.style,
    };

    return <View style={[styles.container, containerStyles]}>{tabs}</View>;
});
