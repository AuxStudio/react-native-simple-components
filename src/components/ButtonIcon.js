import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Touchable from "./Touchable";

export default (ButtonIcon = props => {
    /*
        PROPTYPES
        
        iconName: PropTypes.string,
        customIcon: PropTypes.node,
        handlePress: PropTypes.func.isRequired,
        disabled: PropTypes.bool,
        
        showShadow: PropTypes.bool,
        // iconStyle: PropTypes.node,
        // style: PropTypes.node,
        // disabledStyle: PropTypes.node,
    */

    const shadowStyles = props.showShadow && {
        ...styleConstants.regularShadow,
    };
    const icon = props.customIcon ? (
        props.customIcon
    ) : (
        <MaterialIcon
            name={props.iconName}
            style={[styles.icon, props.iconStyle]}
        />
    );

    const button = props.disabled ? (
        <View
            style={[
                styles.button,
                styles.disabled,
                shadowStyles,
                props.disabledStyle,
                props.style,
            ]}>
            {icon}
        </View>
    ) : (
        <Touchable
            onPress={props.handlePress}
            style={[styles.button, shadowStyles, props.style]}>
            {icon}
        </Touchable>
    );

    return button;
});

const styles = StyleSheet.create({
    button: {
        backgroundColor: styleConstants.dividerColor,
        width: 56,
        height: 56,
        borderRadius: 28,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primaryText,
    },
    disabled: {
        opacity: 0.33,
    },
});
