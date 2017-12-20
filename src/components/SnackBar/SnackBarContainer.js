import React from "react";
import { View, StyleSheet } from "react-native";

import SnackBarComponent from "./SnackBarComponent";

export default (SnackBar = props => {
    /*
        static get propTypes() {
            return {
                iconName: PropTypes.string, // name of icon to display (if any) (does not follow material guidelines)
                customIcon: PropTypes.node, // pass in custom icon
                text: PropTypes.string.isRequired, // text to display
                showCloseButton: PropTypes.bool, // display close button in top right corner (does not follow material guidelines)
                handleClose: PropTypes.func, // handle close
                handleRetry: PropTypes.func, // if supplied, will offer a retry action button
                actionText: PropTypes.string, 
                handleAction: PropTypes.func,
                shouldAutoHide: PropTypes.bool,
                autoHideDuration: PropTypes.number,

                // iconStyle: PropTypes.node,
                // textStyle: PropTypes.node,
                // retryTextStyle: PropTypes.node,
                // actionTextStyle: PropTypes.node,
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
                actionText={props.actionText}
                handleClose={props.handleClose}
                handleRetry={props.handleRetry}
                handleAction={props.handleAction}
                shouldAutoHide={props.shouldAutoHide}
                autoHideDuration={props.autoHideDuration}
                iconStyle={props.iconStyle}
                textStyle={props.textStyle}
                retryTextStyle={props.retryTextStyle}
                actionTextStyle={props.actionTextStyle}
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
