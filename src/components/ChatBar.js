import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

import Icon from "../assets/icons/index";
import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";
import BlankInput from "./BlankInput";

const styles = StyleSheet.create({
    container: {
        ...styleConstants.regularShadow,
        width: styleConstants.windowWidth,
        height: 56,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch",
        paddingHorizontal: 16,
        backgroundColor: styleConstants.primary,
    },
    iconContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.white,
    },
    submitButton: {
        flexDirection: "row",
        alignItems: "center",
    },
    text: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.darkTransWhite,
    },
    whiteText: {
        color: styleConstants.white,
        // textDecorationLine: "underline",
    },
});

export default class SearchHeader extends React.Component {
    static get propTypes() {
        return {
            placeholderText: PropTypes.string,
            value: PropTypes.string,
            handleChange: PropTypes.func,
            handleSubmit: PropTypes.func,
            returnKeyType: PropTypes.string,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon name="chat" style={styles.icon} />
                </View>
                <BlankInput
                    placeholderText={this.props.placeholderText}
                    placeholderTextColor={styleConstants.darkTransWhite}
                    value={this.props.value}
                    valueColor={styleConstants.white}
                    handleChange={this.props.handleChange}
                    handleSubmit={this.props.handleSubmit}
                    returnKeyType={this.props.returnKeyType}
                />
                <Touchable
                    onPress={this.props.handleSubmit}
                    style={styles.submitButton}>
                    <Icon name="send" style={styles.icon} />
                </Touchable>
            </View>
        );
    }
}
