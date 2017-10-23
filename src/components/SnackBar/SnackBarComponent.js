import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { AnimateTranslateY } from "react-native-simple-animators";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

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
            iconName: PropTypes.string,
            customIcon: PropTypes.node,
            text: PropTypes.string.isRequired,
            handleClose: PropTypes.func.isRequired,
            handleRetry: PropTypes.func,

            backgroundColor: PropTypes.string,
            iconColor: PropTypes.string,
            textColor: PropTypes.string,
            retryTextColor: PropTypes.string,
            closeIconColor: PropTypes.string,
            // containerStyle: PropTypes.node,
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

        const icon = this.props.customIcon ? (
            this.props.customIcon
        ) : this.props.iconName ? (
            <MaterialIcon
                name={this.props.iconName}
                size={styleConstants.iconFont}
                color={
                    this.props.iconColor
                        ? this.props.iconColor
                        : styleConstants.success
                }
            />
        ) : null;

        const messageTextColorStyles = this.props.textColor && {
            color: this.props.textColor,
        };

        const retryTextColorStyles = this.props.retryTextColor && {
            color: this.props.retryTextColor,
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

        return (
            <AnimateTranslateY
                initialValue={this.height}
                finalValue={0}
                shouldAnimateIn
                shouldAnimateOut={this.state.hideSnackBar}
                animateOutCallback={this.props.handleClose}
                style={[
                    styles.messageWrapper,
                    this.props.containerStyle,
                    backgroundColorStyles,
                ]}>
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
                    <MaterialIcon
                        name="close"
                        size={styleConstants.iconFont}
                        color={
                            this.props.closeIconColor
                                ? this.props.closeIconColor
                                : styleConstants.veryLightGrey
                        }
                    />
                </Touchable>
            </AnimateTranslateY>
        );
    }
}
