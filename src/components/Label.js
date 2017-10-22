import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: styleConstants.white,
        borderWidth: 1,
        borderColor: styleConstants.primary,
        borderRadius: 32,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginBottom: 4,
        marginHorizontal: 4,
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primary,
        marginRight: 8,
    },
    text: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.primary,
    },
});

export default (Label = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func,
        iconName: PropTypes.string,
        customIcon: PropTypes.node,
        text: PropTypes.string,

        // style: PropTypes.node,
        // textStyle: PropTypes.node,
    */

    const icon = props.customIcon
        ? props.customIcon
        : props.iconName && (
              <MaterialIcon name={props.iconName} style={styles.icon} />
          );

    const label = props.handlePress ? (
        <Touchable
            onPress={props.handlePress}
            style={[styles.container, props.style]}>
            {icon}
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </Touchable>
    ) : (
        <View style={[styles.container, props.style]}>
            {icon}
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </View>
    );

    return label;
});
