import React from "react";
import { StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import ButtonIcon from "./ButtonIcon";

const styles = StyleSheet.create({
    container: {
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

        style: PropTypes.node,
    */

    return (
        <ButtonIcon
            iconName="close"
            style={[styles.container, this.props.style]}
            iconSize={12}
            handlePress={props.handlePress}
            backgroundColor={
                props.backgroundColor ? (
                    props.backgroundColor
                ) : (
                    styleConstants.lightGrey
                )
            }
            iconColor={props.iconColor ? props.iconColor : styleConstants.white}
        />
    );
});
