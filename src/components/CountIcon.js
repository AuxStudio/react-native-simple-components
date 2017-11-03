import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

export default (CountIcon = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func,
        count: PropTypes.number,

        showShadow: PropTypes.bool,
        // style: PropTypes.node,
        // textStyle: PropTypes.node,
    */

    const shadowStyles = props.showShadow && {
        ...styleConstants.smallShadow,
    };

    const countIcon = props.handlePress ? (
        <Touchable
            onPress={props.handlePress}
            style={[styles.container, props.style]}>
            <Text style={[styles.text, props.textStyle]}>{props.count}</Text>
        </Touchable>
    ) : (
        <View style={[styles.container, props.style]}>
            <Text style={[styles.text, props.textStyle]}>{props.count}</Text>
        </View>
    );

    return countIcon;
});

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderRadius: 10,
        overflow: "hidden", // ios
        backgroundColor: styleConstants.dividerColor,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: styleConstants.verySmallFont,
        color: styleConstants.primaryText,
        marginBottom: 1.5,
    },
});
