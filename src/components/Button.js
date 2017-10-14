import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';

const styles = StyleSheet.create({
    button: {
        ...styleConstants.smallShadow,
        width: styleConstants.windowWidth - 32,
        height: 56,
        flexDirection: 'row',
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: styleConstants.white,
        marginTop: 16,
        alignSelf: 'center',
    },
    disabled: {
        opacity: 0.33,
    },
    icon: {
        position: 'absolute',
        left: 16,
        fontSize: styleConstants.iconFont,
    },
    text: {
        fontSize: styleConstants.regularFont,
    },
});

export default (Button = props => {
    /*
        PROPTYPES

        backgroundColor: PropTypes.string,
        iconName: PropTypes.string,
        disabled: PropTypes.string,
        text: PropTypes.string.isRequired,
        handlePress: PropTypes.func.isRequired,
        androidRipple: PropTypes.bool,
        androidRippleColor: PropTypes.string,
        style: PropTypes.oneOfType([
            PropTypes.object,
            PropTypes.number,
        ]),
    */

    const altColor =
        props.backgroundColor === 'transparent' ||
        props.backgroundColor === styleConstants.primary
            ? styleConstants.white
            : styleConstants.primary;

    const icon = props.iconName ? (
        <Icon
            name={props.iconName}
            style={[styles.icon, { color: altColor }]}
        />
    ) : null;

    const button = props.disabled ? (
        <View
            style={[
                styles.button,
                styles.disabled,
                { backgroundColor: props.backgroundColor },
                props.style,
            ]}>
            {icon}
            <Text
                style={[
                    styles.text,
                    { color: altColor },
                    styleConstants.primaryFont,
                ]}>
                {props.text}
            </Text>
        </View>
    ) : (
        <Touchable
            onPress={props.handlePress}
            style={[
                styles.button,
                { backgroundColor: props.backgroundColor },
                props.style,
            ]}
            androidRipple
            androidRippleColor={altColor}>
            {icon}
            <Text
                style={[
                    styles.text,
                    { color: altColor },
                    styleConstants.primaryFont,
                ]}>
                {props.text}
            </Text>
        </Touchable>
    );

    return <View>{button}</View>;
});
