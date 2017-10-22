import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
    },
    button: {
        ...styleConstants.smallShadow,
        height: 56,
        flexDirection: "row",
        paddingHorizontal: 16,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: styleConstants.white,
    },
    disabled: {
        opacity: 0.33,
    },
    icon: {
        position: "absolute",
        left: 16,
        fontSize: styleConstants.iconFont,
    },
    text: {
        fontSize: styleConstants.regularFont,
    },
});

export default (Button = props => {
    /*
        PROPTYPES

        iconName: PropTypes.string,
        text: PropTypes.string.isRequired,
        handlePress: PropTypes.func.isRequired,
                backgroundColor: PropTypes.string,
        disabled: PropTypes.string,

        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        androidRipple: PropTypes.bool,
        androidRippleColor: PropTypes.string,

        style: PropTypes.oneOf([
            PropTypes.object,
            PropTypes.number,
            PropTypes.array,
        ]),
    */

    const backgroundColorStyles = {
        backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : styleConstants.primary,
    };

    const textColorStyles = {
        color: props.textColor ? props.textColor : styleConstants.white,
    };

    const icon = props.iconName ? (
        <MaterialIcon
            name={props.iconName}
            style={[styles.icon, textColorStyles]}
        />
    ) : null;

    const button = props.disabled ? (
        <View
            style={[
                styles.button,
                styles.disabled,
                backgroundColorStyles,
                props.style,
            ]}>
            {icon}
            <Text
                style={[
                    styles.text,
                    textColorStyles,
                    styleConstants.primaryFont,
                ]}>
                {props.text}
            </Text>
        </View>
    ) : (
        <Touchable
            onPress={props.handlePress}
            style={[styles.button, backgroundColorStyles, props.style]}
            androidRipple={props.androidRipple}
            androidRippleColor={
                props.textColor ? props.textColor : styleConstants.white
            }>
            {icon}
            <Text
                style={[
                    styles.text,
                    textColorStyles,
                    styleConstants.primaryFont,
                ]}>
                {props.text}
            </Text>
        </Touchable>
    );

    return <View style={styles.container}>{button}</View>;
});
