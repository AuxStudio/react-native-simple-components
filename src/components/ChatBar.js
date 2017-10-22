import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";
import Input from "./Input";

const styles = StyleSheet.create({
    container: {
        ...styleConstants.regularShadow,
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
        color: styleConstants.white,
    },
    inputContainer: {
        alignSelf: "stretch",
        flex: 1,
        justifyContent: "center",
        paddingLeft: 8,
    },
    input: {
        color: styleConstants.white,
        borderBottomWidth: 0,
    },
    submitButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.darkTransWhite,
    },
    whiteText: {
        color: styleConstants.white,
    },
});

export default (ChatBar = props => {
    /*
        PROPTYPES

        placeholder: PropTypes.string,
        value: PropTypes.string,
        handleChange: PropTypes.func,
        handleSubmit: PropTypes.func,
        returnKeyType: PropTypes.string,

        leftIconName: PropTypes.string,
        leftIcon: PropTypes.node,
        rightIconName: PropTypes.string,
        rightIcon: PropTypes.node,

        backgroundColor: PropTypes.string,
        placeholderTextColor: PropTypes.string,
        textColor: PropTypes.string,
        iconColor: PropTypes.string,

    */

    const backgroundColorStyles = props.backgroundColor && {
        backgroundColor: props.backgroundColor,
    };

    const textColorStyles = props.textColor && {
        color: props.textColor,
    };

    const iconColorStyles = props.iconColor && {
        color: props.iconColor,
    };

    const leftIcon = props.leftIcon ? (
        props.leftIcon
    ) : (
        <MaterialIcon
            name={props.leftIconName ? props.leftIconName : "chat"}
            style={[styles.icon, iconColorStyles]}
        />
    );

    const rightIcon = props.rightIcon ? (
        props.rightIcon
    ) : (
        <MaterialIcon
            name={props.rightIconName ? props.rightIconName : "send"}
            style={[styles.icon, iconColorStyles]}
        />
    );

    return (
        <View style={[styles.container, backgroundColorStyles]}>
            <View style={styles.iconContainer}>{leftIcon}</View>
            <View style={styles.inputContainer}>
                <Input
                    placeholder={props.placeholder}
                    placeholderTextColor={
                        props.placeholderTextColor ? (
                            props.placeholderTextColor
                        ) : (
                            styleConstants.darkTransWhite
                        )
                    }
                    value={props.value}
                    inputStyles={[styles.input, textColorStyles]}
                    handleChange={props.handleChange}
                    handleSubmit={props.handleSubmit}
                    returnKeyType={props.returnKeyType}
                />
            </View>
            <Touchable onPress={props.handleSubmit} style={styles.submitButton}>
                {rightIcon}
            </Touchable>
        </View>
    );
});
