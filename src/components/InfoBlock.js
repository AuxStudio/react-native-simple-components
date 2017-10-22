import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    infoContainer: {
        alignSelf: "stretch",
    },
    infoTextTitle: {
        fontSize: styleConstants.largeFont,
        color: styleConstants.black,
    },
    descriptionWrapper: {},
    descriptionContainer: {},
    infoTextDescription: {
        marginTop: 8,
        fontSize: styleConstants.regularFont,
        color: styleConstants.black,
    },
});

export default (InfoBlock = props => {
    /* 
        PROPTYPES

        title: PropTypes.string,
        description: PropTypes.string,

        titleColor: PropTypes.string,
        descriptionColor: PropTypes.string,

        // textStyle: PropTypes.node,
    */

    const titleStyles = props.titleColor && {
        color: props.titleColor,
        ...props.textStyle,
    };

    const descriptionStyles = props.descriptionColor && {
        color: props.descriptionColor,
        ...props.textStyle,
    };

    return (
        <View style={styles.infoContainer}>
            <Text style={[styles.infoTextTitle, titleStyles]}>
                {props.title}
            </Text>
            <Text style={[styles.infoTextDescription, descriptionStyles]}>
                {props.description}
            </Text>
        </View>
    );
});
