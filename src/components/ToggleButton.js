import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';

const styles = StyleSheet.create({
    toggleButtonContainer: {
        marginBottom: 32,
    },
    toggleButton: {
        width: (styleConstants.windowWidth - 32) / 3,
        alignItems: 'center',
    },
    toggleButtonIcon: {
        fontSize: styleConstants.largeFont,
        color: styleConstants.lightGrey,
    },
    toggleButtonIconActive: {
        color: styleConstants.secondary,
    },
    toggleButtonText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.lightGrey,
        textAlign: 'center',
        marginTop: 8,
    },
    toggleButtonTextActive: {
        color: styleConstants.secondary,
    },
});

export default (ToggleButton = props => {
    /* 
        PROPTYPES

        active: PropTypes.bool,
        handleToggle: PropTypes.func.isRequired,
        title: PropTypes.string,

    */

    const activeIconStyles = props.active && styles.toggleButtonIconActive;
    const activeTextStyles = props.active && styles.toggleButtonTextActive;

    return (
        <View style={styles.toggleButtonContainer}>
            <Touchable
                onPress={() => props.handleToggle(props.uid)}
                style={styles.toggleButton}>
                <Icon
                    name={'folder'}
                    style={[styles.toggleButtonIcon, activeIconStyles]}
                />
                <Text
                    style={[
                        styles.toggleButtonText,
                        activeTextStyles,
                        styleConstants.primaryFont,
                    ]}>
                    {props.title}
                </Text>
            </Touchable>
        </View>
    );
});
