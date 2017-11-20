import React from "react";
import { View, StatusBar, Platform, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import styleConstants from "../assets/styleConstants";

export default function StatusBarComponent(props) {
    /*
    static get propTypes() {
        return {
            backgroundColor: PropTypes.string,
            barStyle: PropTypes.string,
        };
    }
    */

    const iosStatusBar = Platform.OS === "ios" && (
        <View
            style={[
                styles.statusBar,
                { backgroundColor: props.backgroundColor },
            ]}
        />
    );

    return (
        <View style={[styles.container]}>
            <StatusBar
                backgroundColor={props.backgroundColor}
                barStyle={props.barStyle}
            />
            {iosStatusBar}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
    },
    statusBar: {
        height: 22, // ios status bar height
    },
});
