import React from "react";
import {
    View,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Platform,
} from "react-native";

export default (Touchable = props => {
    /* 
        PROPTYPES

        androidRipple: PropTypes.bool,  // flag to display android ripple
        androidRippleColor: PropTypes.string,
        androidRippleBorderless: PropTypes.bool, // android ripple will extend beyond object boundaries
        onPress: PropTypes.func.isRequired,
        disableFeedback: PropTypes.bool, // will render TouchableWithoutFeedback
        children: PropTypes.node,
        // style: PropTypes.node,

    */

    const touchable =
        props.androidRipple && Platform.OS === "android" ? (
            <TouchableNativeFeedback
                onPress={props.onPress}
                background={TouchableNativeFeedback.Ripple(
                    props.androidRippleColor,
                    props.androidRippleBorderless
                )}>
                <View style={props.style}>{props.children}</View>
            </TouchableNativeFeedback>
        ) : props.disableFeedback ? (
            <TouchableWithoutFeedback onPress={props.onPress}>
                <View style={props.style}>{props.children}</View>
            </TouchableWithoutFeedback>
        ) : (
            <TouchableOpacity onPress={props.onPress} style={props.style}>
                {props.children}
            </TouchableOpacity>
        );

    return touchable;
});
