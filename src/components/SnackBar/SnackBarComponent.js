import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import Icon from "../../assets/icons/index";

import config from "../../config";
import styleConstants from "../../assets/styleConstants";

import AnimateTranslateY from "../../animators/AnimateTranslateY";

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
        color: styleConstants.grey,
    },
    iconContainer: {
        marginRight: 8,
        marginTop: 2,
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.veryLightGrey,
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
            text: PropTypes.string,
            success: PropTypes.bool,
            handleReset: PropTypes.func,
            handleRetryAction: PropTypes.func,
        };
    }

    hideSnackBar() {
        this.setState({
            hideSnackBar: true,
        });
    }

    render() {
        const iconName = this.props.success ? "check" : "error";

        const retryButton = this.props.handleRetryAction && (
            <Touchable
                onPress={this.props.handleRetryAction}
                style={styles.retryButton}>
                <Text
                    style={[
                        styles.retryButtonText,
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
                animateOutCallback={this.props.handleReset}
                style={styles.messageWrapper}>
                <View style={styles.messageContainer}>
                    <View style={styles.iconContainer}>
                        <Icon
                            name={iconName}
                            style={[
                                styles.icon,
                                {
                                    color: this.props.success
                                        ? styleConstants.success
                                        : styleConstants.danger,
                                },
                            ]}
                        />
                    </View>
                    <View style={styles.messageTextContainer}>
                        <Text
                            style={[
                                styles.messageText,
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
                    <Icon name="close" style={styles.icon} />
                </Touchable>
            </AnimateTranslateY>
        );
    }
}
