import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';

const styles = StyleSheet.create({
    label: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: styleConstants.white,
        borderWidth: 1,
        borderColor: styleConstants.primary,
        borderRadius: 32,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginBottom: 4,
        marginHorizontal: 4,
        height: 36,
    },
    labelIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primary,
        marginRight: 8,
    },
    labelText: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.primary,
    },
});

export default (Label = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func,
        iconName: PropTypes.string,
        labelText: PropTypes.string,
    */

    const label = props.handlePress ? (
        <Touchable onPress={props.handlePress} style={styles.label}>
            <Icon name={props.iconName} style={styles.labelIcon} />
            <Text style={[styles.labelText, styleConstants.primaryFont]}>
                {props.labelText}
            </Text>
        </Touchable>
    ) : (
        <View style={styles.label}>
            <Icon name={props.iconName} style={styles.labelIcon} />
            <Text style={[styles.labelText, styleConstants.primaryFont]}>
                {props.labelText}
            </Text>
        </View>
    );

    return label;
});
