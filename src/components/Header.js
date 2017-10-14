import React from 'react';
import { View, Text, StatusBar, StyleSheet, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import AnimateOpacity from '../animators/AnimateOpacity';
import Touchable from './Touchable';
import DeleteButton from './DeleteButton';

const iosStyles = Platform.OS === 'ios' && {
    paddingTop: 20,
    height: 76,
};

const styles = StyleSheet.create({
    container: {
        width: styleConstants.windowWidth,
        height: 56,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingHorizontal: 16,
        backgroundColor: styleConstants.primary,
    },
    leftIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    leftIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.white,
    },
    textContainer: {
        flex: 3, // make the text container 3 times as big as the icon containers
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.white,
    },
    rightIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    rightIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.white,
    },
});

export default (Header = props => {
    /* 
        PROPTYPES
    
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string,
        headerShadow: PropTypes.bool,

        backButton: PropTypes.bool,
        closeButton: PropTypes.bool,
        leftComponent: PropTypes.func,
        leftIconName: PropTypes.string,
        handleLeftIconPress: PropTypes.func,

        textComponent: PropTypes.func,
        text: PropTypes.string,
        textLeft: PropTypes.bool,
        textRight: PropTypes.bool,
        handleTextPress: PropTypes.func,

        addButton: PropTypes.bool,
        continueButton: PropTypes.bool,
        rightComponent: PropTypes.func,
        rightIconName: PropTypes.string,
        handleRightIconPress: PropTypes.func,
    */

    const backgroundColorStyles = props.backgroundColor && {
        backgroundColor: props.backgroundColor,
    };

    const textColorStyles = props.textColor && {
        color: props.textColor,
    };

    const headerShadowStyles =
        props.headerShadow && styleConstants.regularShadow;

    const leftIcon = props.leftComponent ? (
        <View style={styles.leftIconContainer}>{props.leftComponent()}</View>
    ) : props.leftIconName ? (
        <Touchable
            style={
                props.textLeft ? (
                    { justifyContent: 'center' }
                ) : (
                    styles.leftIconContainer
                )
            }
            onPress={() => props.handleLeftIconPress}>
            <Icon
                name={props.leftIconName}
                style={[styles.leftIcon, textColorStyles]}
            />
        </Touchable>
    ) : props.backButton ? (
        <Touchable
            style={styles.leftIconContainer}
            onPress={() => Actions.pop()}>
            <Icon
                name="chevron_left"
                style={[styles.leftIcon, textColorStyles]}
            />
        </Touchable>
    ) : props.closeButton ? (
        <Touchable
            style={styles.leftIconContainer}
            onPress={props.handleLeftIconPress}>
            <Icon name="close" style={[styles.leftIcon, textColorStyles]} />
        </Touchable>
    ) : props.textLeft ? null : (
        <View style={styles.leftIconContainer} />
    );

    const textLeftStyles = props.textLeft
        ? {
              alignItems: 'flex-start',
              paddingLeft: 8,
          }
        : null;

    const textRightStyles = props.textRight ? { alignItems: 'flex-end' } : null;

    const text = props.textComponent ? (
        props.textComponent()
    ) : props.handleTextPress ? (
        <Touchable
            style={[styles.textContainer, textLeftStyles, textRightStyles]}
            onPress={props.handleTextPress}>
            <Text
                style={[
                    styles.text,
                    styleConstants.primaryFont,
                    textColorStyles,
                ]}>
                {props.text}
            </Text>
        </Touchable>
    ) : !props.text ? null : (
        <View style={[styles.textContainer, textLeftStyles, textRightStyles]}>
            <Text
                style={[
                    styles.text,
                    styleConstants.primaryFont,
                    textColorStyles,
                ]}>
                {props.text}
            </Text>
        </View>
    );

    const rightIcon = props.rightComponent ? (
        <View style={styles.rightIconContainer}>{props.rightComponent()}</View>
    ) : props.rightIconName ? (
        <Touchable
            style={styles.rightIconContainer}
            onPress={props.handleRightIconPress}>
            <Icon
                name={props.rightIconName}
                style={[styles.rightIcon, textColorStyles]}
            />
        </Touchable>
    ) : props.addButton ? (
        <Touchable
            style={styles.rightIconContainer}
            onPress={props.handleRightIconPress}>
            <Icon name="add" style={[styles.rightIcon, textColorStyles]} />
        </Touchable>
    ) : props.continueButton ? (
        <AnimateOpacity
            initialValue={0}
            finalValue={1}
            shouldAnimateIn
            style={styles.rightIconContainer}>
            <Touchable onPress={props.handleRightIconPress}>
                <Icon
                    name="check"
                    style={[styles.rightIcon, textColorStyles]}
                />
            </Touchable>
        </AnimateOpacity>
    ) : props.textRight ? null : (
        <View style={styles.rightIconContainer} />
    );

    return (
        <View>
            <StatusBar
                backgroundColor={styleConstants.transPrimary}
                barStyle="light-content"
            />
            <View
                style={[
                    styles.container,
                    backgroundColorStyles,
                    headerShadowStyles,
                    iosStyles,
                ]}>
                {leftIcon}
                {text}
                {rightIcon}
            </View>
        </View>
    );
});
