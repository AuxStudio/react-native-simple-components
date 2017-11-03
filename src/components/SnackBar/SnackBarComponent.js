import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../../assets/styleConstants";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import { AnimateTranslateY } from "react-native-simple-animators";
import Touchable from "../Touchable";

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
            text: PropTypes.string,
            handleClose: PropTypes.func.isRequired,
            handleRetry: PropTypes.func,

            // iconStyle: PropTypes.node,
            // textStyle: PropTypes.node,
            // retryTextStyle: PropTypes.node,
            // closeIconStyle: PropTypes.node,
            // containerStyle: PropTypes.node,
        };
    }

    hideSnackBar() {
        this.setState({
            hideSnackBar: true,
        });
    }

    render() {
        const icon = this.props.customIcon ? (
            this.props.customIcon
        ) : this.props.iconName ? (
            <MaterialIcon
                name={this.props.iconName}
                style={[styles.icon, this.props.iconStyle]}
            />
        ) : null;

        const retryButton = this.props.handleRetry && (
            <Touchable
                onPress={this.props.handleRetry}
                style={styles.retryButton}>
                <Text
                    style={[styles.retryButtonText, this.props.retryTextStyle]}>
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
                style={[styles.messageWrapper, this.props.containerStyle]}>
                <View style={styles.messageContainer}>
                    <View style={styles.iconContainer}>{icon}</View>
                    <View style={styles.messageTextContainer}>
                        <Text
                            style={[styles.messageText, this.props.textStyle]}
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
                        style={[styles.closeIcon, this.props.closeIconStyle]}
                    />
                </Touchable>
            </AnimateTranslateY>
        );
    }
}

const styles = StyleSheet.create({
    messageWrapper: {
        position: "absolute",
        bottom: 0,
        width: styleConstants.windowWidth,
        backgroundColor: styleConstants.primary,
        borderTopWidth: 1,
        borderTopColor: styleConstants.dividerColor,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 16,
        padding: 8,
        paddingRight: 32,
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
        color: styleConstants.primaryText,
    },
    retryButton: {
        flex: 0.25,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    retryButtonText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.secondaryText,
    },
    iconContainer: {
        marginRight: 8,
        marginTop: 2,
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primaryText,
    },
    closeIconContainer: {
        position: "absolute",
        top: 8,
        right: 8,
    },
    closeIcon: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.dividerColor,
    },
});
