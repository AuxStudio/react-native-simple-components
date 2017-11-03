import React from "react";
import { View, Text, StatusBar, StyleSheet, Platform } from "react-native";

import styleConstants from "../assets/styleConstants";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { AnimateOpacity } from "react-native-simple-animators";
import Touchable from "./Touchable";

export default (HeaderBar = props => {
    /* 
        PROPTYPES
    
        showShadow: PropTypes.bool,
        statusBarStyle: PropTypes.string, // dark-content or light-content
        statusBarColor: PropTypes.string,

        backButton: PropTypes.bool,
        closeButton: PropTypes.bool,
        leftComponent: PropTypes.func,
        leftIconName: PropTypes.string,
        handleLeftIconPress: PropTypes.func,

        textComponent: PropTypes.func,
        text: PropTypes.string,
        textLeft: PropTypes.bool, // aligns text left
        textRight: PropTypes.bool, // aligns text right
        handleTextPress: PropTypes.func,

        addButton: PropTypes.bool,
        continueButton: PropTypes.bool,
        rightComponent: PropTypes.func,
        rightIconName: PropTypes.string,
        handleRightIconPress: PropTypes.func,

        // leftIconStyle: PropTypes.node,
        // textStyle: PropTypes.node,
        // rightIconStyle: PropTypes.node,
        // style: PropTypes.node,
    */

    const showShadowStyles = props.showShadow && styleConstants.regularShadow;

    const leftIcon = props.leftComponent ? (
        <View style={styles.leftIconContainer}>{props.leftComponent()}</View>
    ) : props.leftIconName ? (
        <Touchable
            style={
                props.textLeft
                    ? { justifyContent: "center" }
                    : styles.leftIconContainer
            }
            onPress={props.handleLeftIconPress}>
            <MaterialIcon
                name={props.leftIconName}
                style={[styles.leftIcon, props.leftIconStyle]}
            />
        </Touchable>
    ) : props.backButton ? (
        <Touchable
            style={styles.leftIconContainer}
            onPress={props.handleLeftIconPress}>
            <MaterialIcon
                name="chevron-left"
                style={[styles.leftIcon, props.leftIconStyle]}
            />
        </Touchable>
    ) : props.closeButton ? (
        <Touchable
            style={styles.leftIconContainer}
            onPress={props.handleLeftIconPress}>
            <MaterialIcon
                name="close"
                style={[styles.leftIcon, props.leftIconStyle]}
            />
        </Touchable>
    ) : props.textLeft ? null : (
        <View style={styles.leftIconContainer} />
    );

    const textLeftStyles = props.textLeft
        ? {
              alignItems: "flex-start",
              paddingLeft: 8,
          }
        : null;

    const textRightStyles = props.textRight ? { alignItems: "flex-end" } : null;

    const text = props.textComponent ? (
        props.textComponent()
    ) : props.handleTextPress ? (
        <Touchable
            style={[styles.textContainer, textLeftStyles, textRightStyles]}
            onPress={props.handleTextPress}>
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </Touchable>
    ) : !props.text ? null : (
        <View style={[styles.textContainer, textLeftStyles, textRightStyles]}>
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </View>
    );

    const rightIcon = props.rightComponent ? (
        <View style={styles.rightIconContainer}>{props.rightComponent()}</View>
    ) : props.rightIconName ? (
        <Touchable
            style={styles.rightIconContainer}
            onPress={props.handleRightIconPress}>
            <MaterialIcon
                name={props.rightIconName}
                style={[styles.rightIcon, props.rightIconStyle]}
            />
        </Touchable>
    ) : props.addButton ? (
        <Touchable
            style={styles.rightIconContainer}
            onPress={props.handleRightIconPress}>
            <MaterialIcon
                name="add"
                style={[styles.rightIcon, props.rightIconStyle]}
            />
        </Touchable>
    ) : props.continueButton ? (
        <AnimateOpacity
            initialValue={0}
            finalValue={1}
            shouldAnimateIn
            style={styles.rightIconContainer}>
            <Touchable onPress={props.handleRightIconPress}>
                <MaterialIcon
                    name="check"
                    style={[styles.rightIcon, props.rightIconStyle]}
                />
            </Touchable>
        </AnimateOpacity>
    ) : props.textRight ? null : (
        <View style={styles.rightIconContainer} />
    );

    return (
        <View style={styles.wrapper}>
            <StatusBar
                backgroundColor={
                    props.statusBarColor
                        ? props.statusBarColor
                        : styleConstants.darkTransPrimary
                }
                barStyle={
                    props.statusBarStyle
                        ? props.statusBarStyle
                        : "light-content"
                }
            />
            <View
                style={[
                    styles.container,
                    showShadowStyles,
                    iosStyles,
                    props.style,
                ]}>
                {leftIcon}
                {text}
                {rightIcon}
            </View>
        </View>
    );
});

const iosStyles = Platform.OS === "ios" && {
    paddingTop: 20,
    height: 76,
};

const styles = StyleSheet.create({
    wrapper: {
        alignSelf: "stretch",
    },
    container: {
        height: 56,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        paddingHorizontal: 16,
        backgroundColor: styleConstants.primary,
    },
    leftIconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
    },
    leftIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primaryText,
    },
    textContainer: {
        flex: 3, // make the text container 3 times as big as the icon containers
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primaryText,
    },
    rightIconContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    rightIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primaryText,
    },
});
