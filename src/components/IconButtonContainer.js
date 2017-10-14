import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "../assets/icons/index";
import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 64,
        left: 8,
        right: 8,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
});

export default (IconButtonContainer = props => {
    return <View style={styles.container}>{props.children}</View>;
});
