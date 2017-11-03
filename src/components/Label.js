import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import Touchable from "./Touchable";

export default (Label = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func,
        iconName: PropTypes.string,
        customIcon: PropTypes.node,
        text: PropTypes.string,

        showShadow: PropTypes.bool,
        style: PropTypes.node,
        textStyle: PropTypes.node,
        iconStyle: PropTypes.node,
    */

    const shadowStyles = props.showShadow && {
        ...styleConstants.smallShadow,
    };

    const icon = props.customIcon
        ? props.customIcon
        : props.iconName && (
              <MaterialIcon
                  name={props.iconName}
                  style={[styles.icon, props.iconStyle]}
              />
          );

    const label = props.handlePress ? (
        <Touchable
            onPress={props.handlePress}
            style={[styles.container, shadowStyles, props.style]}>
            {icon}
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </Touchable>
    ) : (
        <View style={[styles.container, shadowStyles, props.style]}>
            {icon}
            <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
        </View>
    );

    return label;
});

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: styleConstants.dividerColor,
        paddingVertical: 4,
        paddingHorizontal: 8,
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primaryText,
        marginRight: 8,
    },
    text: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.primaryText,
    },
});
