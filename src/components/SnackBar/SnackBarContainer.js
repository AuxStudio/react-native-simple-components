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
                icon: PropTypes.node, // pass in custom icon component
                text: PropTypes.string, // text to display
                closeIcon: PropTypes.node, // pass in custom close icon component (renders X text as default)
                onClose: PropTypes.func,
                onRetry: PropTypes.func, // if supplied, will offer a retry action button
                backgroundColor: PropTypes.string,
                textColor: PropTypes.string,
                retryTextColor: PropTypes.string,
            };
        }
    */

    return (
        <View style={styles.container}>
            <SnackBarComponent
                icon={props.icon}
                text={props.text}
                closeIcon={props.icon}
                handleClose={props.onClose}
                handleRetry={props.onRetry}
                backgroundColor={props.backgroundColor}
                textColor={props.textColor}
                retryTextColor={props.retryTextColor}
            />
        </View>
    );
});
