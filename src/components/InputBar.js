import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Touchable from "./Touchable";
import Input from "./Input";

export default (InputBar = props => {
    /*
        PROPTYPES

        placeholder: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        value: PropTypes.string,
        handleChange: PropTypes.func,
        handleSubmit: PropTypes.func,   // right icon press will also trigger this function
        returnKeyType: PropTypes.string,
        handleFocus: PropTypes.func,
        handleBlur: PropTypes.func,
        multiline: PropTypes.bool,
        autofocus: PropTypes.bool,

        leftIconName: PropTypes.string,
        leftIcon: PropTypes.node,
        rightIconName: PropTypes.string,
        rightIcon: PropTypes.node,

        showShadow: PropTypes.bool,
        // leftIconStyle: PropTypes.node,
        // rightIconStyle: PropTypes.node,
        // style: PropTypes.node, // input style
        // containerStyle: PropTypes.node,

    */

    const leftIcon = props.leftIcon
        ? props.leftIcon
        : props.leftIconName && (
              <MaterialIcon
                  name={props.leftIconName}
                  style={[styles.icon, props.leftIconStyle]}
              />
          );

    const rightIcon = props.rightIcon
        ? props.rightIcon
        : props.rightIconName && (
              <MaterialIcon
                  name={props.rightIconName}
                  style={[styles.icon, props.rightIconStyle]}
              />
          );

    const rightIconComponent = props.handleSubmit && (
        <Touchable onPress={props.handleSubmit} style={styles.submitButton}>
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
                />
            </View>
            {rightIconComponent}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
        height: 56,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        paddingHorizontal: 16,
        backgroundColor: styleConstants.primary,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primaryText,
    },
    inputContainer: {
        alignSelf: "stretch",
        flex: 1,
        justifyContent: "center",
        paddingLeft: 8,
    },
    input: {
        color: styleConstants.primaryText,
        borderBottomWidth: 0,
    },
    submitButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primaryText,
    },
});
