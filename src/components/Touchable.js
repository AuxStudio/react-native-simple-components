import React from "react";
import {
    View,
    TouchableNativeFeedback,
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
        style: PropTypes.oneOf([
            PropTypes.object,
            PropTypes.number,
        ]),
        children: PropTypes.node,

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
        ) : (
            <TouchableOpacity onPress={props.onPress} style={props.style}>
                {props.children}
            </TouchableOpacity>
        );

    return touchable;
});
