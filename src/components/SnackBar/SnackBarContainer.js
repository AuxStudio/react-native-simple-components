import React from "react";
import { View, StyleSheet } from "react-native";

import SnackBarComponent from "./SnackBarComponent";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
});

export default (SnackBar = props => {
    /*
        static get propTypes() {
            return {
                iconName: PropTypes.string, // name of icon to display (if any)
                text: PropTypes.string.isRequired, // text to display
                onClose: PropTypes.func.isRequired, // handle close
                onRetry: PropTypes.func, // if supplied, will offer a retry action button
                backgroundColor: PropTypes.string,
                iconColor: PropTypes.string,
                textColor: PropTypes.string,
                retryTextColor: PropTypes.string,
                closeIconColor: PropTypes.string,
            };
        }
    */

    return (
        <View style={styles.container}>
            <SnackBarComponent
                iconName={props.iconName}
                text={props.text}
                handleClose={props.onClose}
                handleRetry={props.onRetry}
                backgroundColor={props.backgroundColor}
                iconColor={props.iconColor}
                textColor={props.textColor}
                retryTextColor={props.retryTextColor}
                closeIconColor={props.closeIconColor}
            />
        </View>
    );
});
