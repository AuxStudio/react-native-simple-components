import React from 'react';
import { View, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';

const styles = StyleSheet.create({
    deleteButtonContainer: {},
    deleteButton: {
        backgroundColor: styleConstants.lightGrey,
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteIcon: {
        fontSize: 12,
        color: styleConstants.primary,
    },
});

export default (DeleteButton = props => {
    /*
        PROPTYPES

        handlePress: PropTypes.func.isRequired,
    */

    return (
        <View style={styles.deleteButtonContainer}>
            <Touchable onPress={props.handlePress} style={styles.deleteButton}>
                <Icon name="close" style={styles.deleteIcon} />
            </Touchable>
        </View>
    );
});
