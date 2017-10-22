import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    button: {
        ...styleConstants.regularShadow,
        backgroundColor: styleConstants.primary,
        width: 56,
        height: 56,
        borderRadius: 28,
        borderWidth: 1,
        borderColor: styleConstants.white,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    icon: {
        color: styleConstants.white,
    },
    disabled: {
        opacity: 0.33,
    },
});

export default (ButtonIcon = props => {
    /*
        PROPTYPES
        
        iconName: PropTypes.string,
        handlePress: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        customIcon: PropTypes.node,
        
        backgroundColor: PropTypes.string,
        iconColor: PropTypes.string,
        iconSize: PropTypes.number,

        style: PropTypes.object,
    */

    const backgroundColorStyles = {
        backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : styleConstants.primary,
    };

    const iconColorStyles = {
        color: props.iconColor ? props.iconColor : styleConstants.white,
    };

    const borderColorStyles = {
        borderColor: props.iconColor ? props.iconColor : styleConstants.white,
    };

    const icon = props.customIcon ? (
        props.customIcon
    ) : (
        <MaterialIcon
            name={props.iconName}
            size={props.iconSize ? props.iconSize : styleConstants.iconFont}
            style={[styles.icon, iconColorStyles]}
        />
    );

    const button = props.disabled ? (
        <View
            style={[
                styles.button,
                backgroundColorStyles,
                borderColorStyles,
                styles.disabled,
                props.style,
            ]}>
            {icon}
        </View>
    ) : (
        <Touchable
            onPress={props.handlePress}
            style={[
                styles.button,
                backgroundColorStyles,
                borderColorStyles,
                props.style,
            ]}>
            {icon}
        </Touchable>
    );

    return button;
});
