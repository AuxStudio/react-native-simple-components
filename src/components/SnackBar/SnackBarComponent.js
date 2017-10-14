import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { AnimateTranslateY } from "react-native-simple-animators";

import styleConstants from "../../assets/styleConstants";

import Touchable from "../Touchable";

const styles = StyleSheet.create({
    messageWrapper: {
        ...styleConstants.largeShadow,
        elevation: 100, // TODO: check if this is necessary
        position: "absolute",
        bottom: 0,
        width: styleConstants.windowWidth,
        backgroundColor: styleConstants.grey,
        borderTopWidth: 1,
        borderTopColor: styleConstants.veryLightGrey,
        flexDirection: "row",
        justifyContent: "space-between",
        minHeight: 80,
        padding: 8,
    },
    messageContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    messageTextContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 8,
    },
    messageText: {
        flex: 1,
        fontSize: styleConstants.regularFont,
        color: styleConstants.white,
    },
    retryButton: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    retryButtonText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.veryLightGrey,
    },
    iconContainer: {
        marginRight: 8,
        marginTop: 2,
    },
    closeIconContainer: {
        alignSelf: "stretch",
    },
    closeIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.veryLightGrey,
    },
});

export default class SnackBarComponent extends React.Component {
    constructor(props) {
        super(props);

        this.hideSnackBar = this.hideSnackBar.bind(this);

        this.height = 81;

        this.state = {
            hideSnackBar: false,
        };
    }

    static get propTypes() {
        return {
            icon: PropTypes.node,
            text: PropTypes.string,
            closeIcon: PropTypes.node,
            handleClose: PropTypes.func,
            handleRetry: PropTypes.func,

            backgroundColor: PropTypes.string,
            textColor: PropTypes.string,
            retryTextColor: PropTypes.string,
        };
    }

    hideSnackBar() {
        this.setState({
            hideSnackBar: true,
        });
    }

    render() {
        const backgroundColorStyles = this.props.backgroundColor && {
            backgroundColor: this.props.backgroundColor,
        };

        const icon = this.props.icon && this.props.icon;

        const messageTextColorStyles = this.props.textColor && {
            color: this.props.textColor,
        };

        const retryTextColorStyles = this.props.retryTextColor && {
            color: props.retryTextColor,
        };

        const retryButton = this.props.handleRetry && (
            <Touchable
                onPress={this.props.handleRetry}
                style={styles.retryButton}>
                <Text
                    style={[
                        styles.retryButtonText,
                        retryTextColorStyles,
                        styleConstants.primaryFont,
                    ]}>
                    RETRY
                </Text>
            </Touchable>
        );

        const closeIcon = this.props.closeIcon ? (
            this.props.closeIcon
        ) : (
            <Text style={styles.closeIcon}>X</Text>
        );

        return (
            <AnimateTranslateY
                initialValue={this.height}
                finalValue={0}
                shouldAnimateIn
                shouldAnimateOut={this.state.hideSnackBar}
                animateOutCallback={this.props.handleClose}
                style={[styles.messageWrapper, backgroundColorStyles]}>
                <View style={styles.messageContainer}>
                    <View style={styles.iconContainer}>{icon}</View>
                    <View style={styles.messageTextContainer}>
                        <Text
                            style={[
                                styles.messageText,
                                messageTextColorStyles,
                                styleConstants.primaryFont,
                            ]}
                            multiline>
                            {this.props.text}
                        </Text>
                        {retryButton}
                    </View>
                </View>
                <Touchable
                    onPress={this.hideSnackBar}
                    style={styles.closeIconContainer}>
                    {closeIcon}
                </Touchable>
            </AnimateTranslateY>
        );
    }
}
