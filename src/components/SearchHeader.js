import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

import Icon from "../assets/icons/index";
import styleConstants from "../assets/styleConstants";

import ContentContainer from "./ContentContainer";
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
    leftIconContainer: {
        justifyContent: "center",
        alignItems: "flex-start",
    },
    leftIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.white,
    },
    searchByContainer: {
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
            searchByValue: PropTypes.string,
            handleChangeSearchByValue: PropTypes.func,
            handleSubmit: PropTypes.func,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <ContentContainer style={{ flexDirection: "row" }}>
                    <View style={styles.leftIconContainer}>
                        <Icon name="search" style={styles.leftIcon} />
                    </View>
                    <BlankInput
                        placeholderText={this.props.placeholderText}
                        placeholderTextColor={styleConstants.darkTransWhite}
                        value={this.props.value}
                        valueColor={styleConstants.white}
                        handleChange={this.props.handleChange}
                        onSubmitEditing={this.props.handleSubmit}
                        returnKeyType="search"
                    />
                    <Touchable
                        onPress={this.props.handleChangeSearchByValue}
                        style={styles.searchByContainer}>
                        <Text style={[styles.text, styleConstants.primaryFont]}>
                            By{" "}
                        </Text>
                        <Text
                            style={[
                                styles.text,
                                styles.whiteText,
                                styleConstants.primaryFont,
                            ]}>
                            {this.props.searchByValue}
                        </Text>
                    </Touchable>
                </ContentContainer>
            </View>
        );
    }
}
