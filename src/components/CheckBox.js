import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";
import { AnimateScale } from "react-native-simple-animators";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function CheckBox(props) {
    // static get propTypes() {
    //     return {
    //         isChecked: PropTypes.bool,
    //         handlePress: PropTypes.func,

    //         // style: PropTypes.node,
    //         // iconStyle: PropTypes.node,
    //     };
    // }

    const icon = props.isChecked && (
        <AnimateScale initialValue={0.5} finalValue={1} shouldAnimateIn>
            <Icon name="check" style={[styles.icon, props.iconStyle]} />
        </AnimateScale>
    );

    return (
        <Touchable
            onPress={props.handlePress}
            disableFeedback
            style={[styles.container, props.style]}>
            {icon}
        </Touchable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: styleConstants.primaryText,
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primaryText,
    },
});
