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

        // style: PropTypes.node,
        // textStyle: PropTypes.node,
    */

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
