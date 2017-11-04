import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";
import Icon from "react-native-vector-icons/MaterialIcons";

export default (TouchableIcon = props => {
    /*
        PROPTYPES

        iconName: PropTypes.string.isRequired,
        customIcon: PropTypes.node,
        handlePress: PropTypes.func.isRequired,
        disabled: PropTypes.string,

        // style: PropTypes.node,
        // iconStyle: PropTypes.node,
        // disabledStyle: PropTypes.node,
    */

    const icon = props.customIcon ? (
        props.customIcon
    ) : (
        <Icon name={props.iconName} style={[styles.icon, props.iconStyle]} />
    );

    const button = props.disabled ? (
        <View
            style={[
                styles.button,
                props.disabledStyle ? props.disabledStyle : styles.disabled,
                props.style,
            ]}>
            {icon}
        </View>
    ) : (
        <Touchable
            onPress={props.handlePress}
            style={[styles.button, props.style]}>
            {icon}
        </Touchable>
    );

    return button;
});

const styles = StyleSheet.create({
    button: {},
    disabled: {
        opacity: 0.33,
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primaryText,
    },
});
