import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";
import Input from "./Input";

const styles = StyleSheet.create({
    container: {
        ...styleConstants.regularShadow,
        alignSelf: "stretch",
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
    inputContainer: {
        alignSelf: "stretch",
        flex: 1,
        justifyContent: "center",
        paddingLeft: 8,
    },
    input: {
        color: styleConstants.white,
        borderBottomWidth: 0,
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
    },
});

export default class ChatBar extends React.Component {
    static get propTypes() {
        return {
            placeholder: PropTypes.string,
            value: PropTypes.string,
            handleChange: PropTypes.func,
            handleSubmit: PropTypes.func,
            returnKeyType: PropTypes.string,

            leftIconName: PropTypes.string,
            leftIcon: PropTypes.node,
            rightIconName: PropTypes.string,
            rightIcon: PropTypes.node,

            backgroundColor: PropTypes.string,
            placeholderTextColor: PropTypes.string,
            textColor: PropTypes.string,
            iconColor: PropTypes.string,
        };
    }

    render() {
        const backgroundColorStyles = this.props.backgroundColor && {
            backgroundColor: this.props.backgroundColor,
        };

        const textColorStyles = this.props.textColor && {
            color: this.props.textColor,
        };

        const iconColorStyles = this.props.iconColor && {
            color: this.props.iconColor,
        };

        const leftIcon = this.props.leftIcon ? (
            this.props.leftIcon
        ) : (
            <MaterialIcon
                name={
                    this.props.leftIconName ? this.props.leftIconName : "chat"
                }
                style={[styles.icon, iconColorStyles]}
            />
        );

        const rightIcon = this.props.rightIcon ? (
            this.props.rightIcon
        ) : (
            <MaterialIcon
                name={
                    this.props.rightIconName ? this.props.rightIconName : "send"
                }
                style={[styles.icon, iconColorStyles]}
            />
        );

        return (
            <View style={[styles.container, backgroundColorStyles]}>
                <View style={styles.iconContainer}>{leftIcon}</View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder={this.props.placeholder}
                        placeholderTextColor={
                            this.props.placeholderTextColor ? (
                                this.props.placeholderTextColor
                            ) : (
                                styleConstants.darkTransWhite
                            )
                        }
                        value={this.props.value}
                        inputStyles={[styles.input, textColorStyles]}
                        handleChange={this.props.handleChange}
                        handleSubmit={this.props.handleSubmit}
                        returnKeyType={this.props.returnKeyType}
                    />
                </View>
                <Touchable
                    onPress={this.props.handleSubmit}
                    style={styles.submitButton}>
                    {rightIcon}
                </Touchable>
            </View>
        );
    }
}
