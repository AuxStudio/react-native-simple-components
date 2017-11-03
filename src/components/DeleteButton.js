import React from "react";
import { StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import ButtonIcon from "./ButtonIcon";

export default (DeleteButton = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func.isRequired,

        // iconStyle: PropTypes.node,
        // style: PropTypes.node,
    */

    return (
        <ButtonIcon
            handlePress={props.handlePress}
            iconName="close"
            iconStyle={[styles.icon, props.iconStyle]}
            style={[styles.container, props.style]}
        />
    );
});

const styles = StyleSheet.create({
    container: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 0,
        backgroundColor: styleConstants.dividerColor,
    },
    icon: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.primaryText,
    },
});
