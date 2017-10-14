import React from "react";
import { StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    deleteButton: {
        backgroundColor: styleConstants.lightGrey,
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default (DeleteButton = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func.isRequired,
        backgroundColor: PropTypes.string,
        iconSize: PropTypes.number,
        iconColor: PropTypes.string,
    */

    const backgroundColorStyles = props.backgroundColor && {
        backgroundColor: props.backgroundColor,
    };

    return (
        <Touchable
            onPress={props.handlePress}
            style={[styles.deleteButton, backgroundColorStyles]}>
            <MaterialIcon
                name="close"
                size={props.iconSize ? props.iconSize : 12}
                color={
                    props.iconColor ? props.iconColor : styleConstants.primary
                }
            />
        </Touchable>
    );
});
