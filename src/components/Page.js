import React from 'react';
import { View, StyleSheet } from 'react-native';

import config from '../config';
import styleConstants from '../assets/styleConstants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        position: 'relative',
    },
});

export default (Page = props => {
    /* 
        PROPTYPES

        backgroundColor: Proptypes.string,
        justifyContent: PropTypes.string,
        removeBottomPadding: PropTypes.bool,
        fauxFooter: PropTypes.bool,
        children: PropTypes.node,

    */

    const dimensionsStyles = config.testing.dimensions && {
        width: 320,
        height: 480,
    };

    const pageStyles = {
        backgroundColor: props.backgroundColor
            ? props.backgroundColor
            : styleConstants.primary,
        justifyContent: props.justifyContent
            ? props.justifyContent
            : 'space-between',
        paddingBottom: props.removeBottomPadding
            ? 0
            : props.fauxFooter ? 0 : 16,
    };

    const fauxFooter = props.fauxFooter ? (
        <View style={{ height: 56 }} />
    ) : null;

    return (
        <View style={[styles.container, pageStyles, dimensionsStyles]}>
            {props.children}
            {fauxFooter}
        </View>
    );
});
