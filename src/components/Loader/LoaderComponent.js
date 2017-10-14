import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import config from "../../config";
import styleConstants from "../../assets/styleConstants";

import AnimateOpacity from "../../animators/AnimateOpacity";
import AnimateTranslateX from "../../animators/AnimateTranslateX";

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 5,
    },
});

export default (LoaderComponent = props => {
    return (
        <AnimateOpacity initialValue={0} finalValue={1} shouldAnimateIn>
            <AnimateTranslateX
                initialValue={-100}
                finalValue={styleConstants.windowWidth}
                shouldAnimateIn
                shouldRepeat
                shouldLoop
                duration={2000}>
                <View
                    style={[styles.container, { backgroundColor: props.color }]}
                />
            </AnimateTranslateX>
        </AnimateOpacity>
    );
});
