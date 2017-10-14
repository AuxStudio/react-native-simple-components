import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';

const styles = StyleSheet.create({
    container: {
        ...styleConstants.regularShadow,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: styleConstants.primary,
    },
    tabContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    iconContainer: {
        paddingHorizontal: 16,
        position: 'relative',
    },
    icon: {
        fontSize: styleConstants.iconFont,
    },
    text: {
        fontSize: styleConstants.smallFont,
        marginTop: 2,
    },
    countContainer: {
        position: 'absolute',
        top: -5,
        right: -4,
    },
    countText: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.lightGrey,
    },
    disabled: {
        opacity: 0.33,
    },
    highlight: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: styleConstants.secondary,
    },
});

export default (TabBar = props => {
    /* 
        PROPTYPES

        tabs: PropTypes.array.isRequired,
        backgroundColor: PropTypes.string,
        color: PropTypes.string,
        highlightedProfileTab: PropTypes.bool,

    */

    const tabs = props.tabs.map(value => {
        const colorStyles = {
            color: value.active
                ? styleConstants.secondary
                : props.color ? props.color : styleConstants.white,
        };

        const count = value.count ? (
            <View style={styles.countContainer}>
                <Text style={[styles.countText, styleConstants.primaryFont]}>
                    {value.count.toString()}
                </Text>
            </View>
        ) : null;

        const highlight = props.highlightProfileTab &&
        value.title === 'Profile' &&
        !value.active && <View style={styles.highlight} />;

        const tab = value.disabled ? (
            <View
                style={[styles.tabContainer, styles.disabled]}
                key={'tab-' + value.title}>
                <View style={styles.iconContainer}>
                    <Icon
                        name={value.icon}
                        style={[styles.icon, colorStyles]}
                    />
                    {count}
                </View>
                <Text
                    style={[
                        styles.text,
                        styleConstants.primaryFont,
                        colorStyles,
                    ]}>
                    {value.title}
                </Text>
            </View>
        ) : (
            <Touchable
                onPress={value.action}
                style={styles.tabContainer}
                key={'tab-' + value.title}>
                <View style={styles.iconContainer}>
                    <Icon
                        name={value.icon}
                        style={[styles.icon, colorStyles]}
                    />
                    {count}
                    {highlight}
                </View>
                <Text
                    style={[
                        styles.text,
                        styleConstants.primaryFont,
                        colorStyles,
                    ]}>
                    {value.title}
                </Text>
            </Touchable>
        );

        return tab;
    });

    const backgroundColorStyles = props.backgroundColor
        ? {
              backgroundColor: props.backgroundColor,
          }
        : null;

    return (
        <View style={[styles.container, backgroundColorStyles]}>{tabs}</View>
    );
});
