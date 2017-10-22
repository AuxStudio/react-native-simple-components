import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    container: {
        ...styleConstants.smallShadow,
        width: 20,
        height: 20,
        borderRadius: 10,
        overflow: "hidden", // ios
        backgroundColor: styleConstants.veryLightGrey,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: styleConstants.verySmallFont,
        color: styleConstants.white,
        marginBottom: 2,
    },
});

export default (CountIcon = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func,
        count: PropTypes.number,

        backgroundColor: PropTypes.string,
        activeBackgroundColor: PropTypes.string, // if count, apply this style
        textColor: PropTypes.string,
        activeTextColor: PropTypes.string, // if count, apply this style

        // style: PropTypes.node,
        // textStyle: PropTypes.node,
    */

    const activeBackgroundColorStyles = props.count > 0 && {
        backgroundColor: props.activeBackgroundColor
            ? props.activeBackgroundColor
            : styleConstants.secondary,
    };

    const activeTextColorStyles = props.count > 0 &&
    props.activeTextColor && {
        color: props.activeTextColor,
    };

    const countIcon = props.handlePress ? (
        <Touchable
            onPress={props.handlePress}
            style={[
                styles.container,
                props.style,
                activeBackgroundColorStyles,
            ]}>
            <Text style={[styles.text, props.textStyle, activeTextColorStyles]}>
                {props.count}
            </Text>
        </Touchable>
    ) : (
        <View
            style={[
                styles.container,
                props.style,
                activeBackgroundColorStyles,
            ]}>
            <Text style={[styles.text, props.textStyle, activeTextColorStyles]}>
                {props.count}
            </Text>
        </View>
    );

    return countIcon;
});
