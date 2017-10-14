import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default (InputContainer = props => {
    /*
        PROPTYPES

        style: Proptypes.oneOf([
            PropTypes.object,
            PropTypes.number,
        ]),
        children: PropTypes.node,
    */

    const customStyles = props.style && props.style;

    return (
        <View style={[{ flex: 1, alignSelf: 'stretch' }, customStyles]}>
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ paddingBottom: 16 }}>
                {props.children}
            </KeyboardAwareScrollView>
        </View>
    );
});
