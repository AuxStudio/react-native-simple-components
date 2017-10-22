import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
    AnimateOpacity,
    AnimateTranslateX,
} from "react-native-simple-animators";

import styleConstants from "../assets/styleConstants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConstants.veryLightGrey,
        borderRadius: 16,
        overflow: "hidden", // ios
    },
    text: {
        color: "transparent",
        fontSize: styleConstants.smallFont,
    },
});

export default (LoadingText = props => {
    /*
        PROPTYPES

        text: PropTypes.string,
        initialOpacityValue: PropTypes.number // default 0.33
        finalOpacityValue: PropTypes.number // default 1
        initialTranslateXValue: PropTypes.number // default window width
        finalTranslateXValue: PropTypes.number // default 0
        duration: PropTypes.number // default is 1000 ms

        // style: PropTypes.node,
        // textStyle: PropTypes.node
    */

    return (
        <AnimateOpacity
            initialValue={
                props.initialOpacityValue ? props.initialOpacityValue : 0.33
            }
            finalValue={props.finalOpacityValue ? props.finalOpacityValue : 1}
            shouldAnimateIn
            shouldRepeat
            duration={props.duration ? props.duration : 750}>
            <AnimateTranslateX
                initialValue={
                    props.initialTranslateXValue ? (
                        props.initialTranslateXValue
                    ) : (
                        styleConstants.windowWidth * -1
                    )
                }
                finalValue={
                    props.finalTranslateXValue ? props.finalTranslateXValue : 0
                }
                shouldAnimateIn
                duration={props.duration ? props.duration : 1000}
                style={[styles.container, props.style]}>
                <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
            </AnimateTranslateX>
        </AnimateOpacity>
    );
});
