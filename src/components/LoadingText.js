import React from "react";
import { View, Text, StyleSheet } from "react-native";

import config from "../config";
import styleConstants from "../assets/styleConstants";

import AnimateOpacity from "../animators/AnimateOpacity";
import AnimateTranslateX from "../animators/AnimateTranslateX";

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
    return (
        <AnimateOpacity
            initialValue={0.33}
            finalValue={1}
            shouldAnimateIn
            shouldRepeat
            duration={config.animation.duration.long}>
            <AnimateTranslateX
                initialValue={styleConstants.windowWidth * -1}
                finalValue={0}
                shouldAnimateIn
                duration={1000}
                style={[
                    styles.container,
                    props.backgroundColor && {
                        backgroundColor: props.backgroundColor,
                    },
                ]}>
                <Text style={[styles.text, styleConstants.primaryFont]}>
                    {props.text}
                </Text>
            </AnimateTranslateX>
        </AnimateOpacity>
    );
});
