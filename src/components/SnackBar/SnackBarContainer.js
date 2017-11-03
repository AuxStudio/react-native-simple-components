import React from "react";
import { View, StyleSheet } from "react-native";

import SnackBarComponent from "./SnackBarComponent";

export default (SnackBar = props => {
    /*
        static get propTypes() {
            return {
                iconName: PropTypes.string, // name of icon to display (if any)
                customIcon: PropTypes.node, // pass in custom icon
                text: PropTypes.string.isRequired, // text to display
                handleClose: PropTypes.func.isRequired, // handle close
                handleRetry: PropTypes.func, // if supplied, will offer a retry action button

                // iconStyle: PropTypes.node,
                // textStyle: PropTypes.node,
                // retryTextStyle: PropTypes.node,
                // closeIconStyle: PropTypes.node,
                // containerStyle: PropTypes.node, // backgroundColor etc
            };
        }
    */

    return (
        <View style={styles.container}>
            <SnackBarComponent
                iconName={props.iconName}
                customIcon={props.customIcon}
                text={props.text}
                handleClose={props.handleClose}
                handleRetry={props.handleRetry}
                iconStyle={props.iconStyle}
                textStyle={props.textStyle}
                retryTextStyle={props.retryTextStyle}
                closeIconStyle={props.closeIconStyle}
                containerStyle={props.containerStyle}
            />
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
});
