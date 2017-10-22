import React from "react";
import { StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import ButtonIcon from "./ButtonIcon";

const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConstants.lightGrey,
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 0,
    },
});

export default (DeleteButton = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func.isRequired,
        backgroundColor: PropTypes.string,
        iconColor: PropTypes.string,
    */

    const backgroundColorStyles = props.backgroundColor && {
        backgroundColor: props.backgroundColor,
    };

    return (
        <ButtonIcon iconName="close" style={styles.container} iconSize={12} />
    );
});
