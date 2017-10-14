import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "../assets/icons/index";
import styleConstants from "../assets/styleConstants";

import AnimateTranslateY from "../animators/AnimateTranslateY";

import ContentContainer from "./ContentContainer";
import Touchable from "./Touchable";

const styles = StyleSheet.create({
    wrapper: {
        ...styleConstants.smallShadow,
        position: "relative",
        zIndex: 1, // ios
        top: 0,
        width: styleConstants.windowWidth,
    },
    container: {
        height: 42,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: styleConstants.primary,
    },
    tabContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
    },
    iconContainer: {
        marginRight: 8,
    },
    icon: {
        fontSize: styleConstants.iconFont,
    },
    text: {
        fontSize: styleConstants.smallFont,
    },
    disabled: {
        opacity: 0.33,
    },
});

export default (HeaderSecondaryTabBar = props => {
    /* 
        PROPTYPES

        tabs: PropTypes.array.isRequired,
        backgroundColor: PropTypes.string,
        activeTab: PropTypes.string,
        handleTabPress: PropTypes.func,

        title: PropTypes.string,
        iconName: PropTypes.string,
        disabled: PropTypes.bool,
    */

    const tabs = props.tabs.map(value => {
        const colorStyles = {
            color:
                value.title === props.activeTab
                    ? styleConstants.primary
                    : styleConstants.grey,
        };

        const tab = value.disabled ? (
            <View
                style={[styles.tabContainer, styles.disabled]}
                key={"tab-" + value.title}>
                <View style={styles.iconContainer}>
                    <Icon
                        name={value.icon}
                        style={[styles.icon, colorStyles]}
                    />
                </View>
                <Text
                    numberOfLines={1}
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
                onPress={() => props.handleTabPress(value.title)}
                style={styles.tabContainer}
                key={"tab-" + value.title}>
                <View style={styles.iconContainer}>
                    <Icon
                        name={value.icon}
                        style={[styles.icon, colorStyles]}
                    />
                </View>
                <Text
                    numberOfLines={1}
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
        <AnimateTranslateY
            initialValue={-112}
            finalValue={0}
            shouldAnimateIn
            style={styles.wrapper}>
            <View style={[styles.container, backgroundColorStyles]}>
                <ContentContainer style={{ flexDirection: "row" }}>
                    {tabs}
                </ContentContainer>
            </View>
        </AnimateTranslateY>
    );
});
