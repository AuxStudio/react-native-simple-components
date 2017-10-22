import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default (InputContainer = props => {
    /*
        PROPTYPES

        // wrapperStyle: PropTypes.node,
        // containerStyle: PropTypes.node,
        children: PropTypes.node,
    */

    return (
        <View style={[{ flex: 1, alignSelf: "stretch" }, props.wrapperStyle]}>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={[
                    { paddingBottom: 16 },
                    props.containerStyle,
                ]}>
                {props.children}
            </KeyboardAwareScrollView>
        </View>
    );
});
