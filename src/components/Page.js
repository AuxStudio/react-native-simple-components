import React from "react";
import { View, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
        alignItems: "center",
        position: "relative",
    },
});

export default (Page = props => {
    /* 
        PROPTYPES

        backgroundColor: Proptypes.string,
        children: PropTypes.node,
        dimensions: PropTypes.object, // can set width and height here (useful during testing)

        // style: PropTypes.node,

    */

    const backgroundColorStyles = props.backgroundColor && {
        backgroundColor: props.backgroundColor,
    };

    const dimensionsStyles = props.dimensions && props.dimensions;
    if (dimensionStyles && dimensionsStyles.height) {
        dimensionsStyles["flex"] = 0;
    }

    return (
        <View
            style={[
                styles.container,
                props.style,
                backgroundColorStyles,
                dimensionsStyles,
            ]}>
            {props.children}
        </View>
    );
});
