import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Icon from "../assets/icons/index";
import styleConstants from "../assets/styleConstants";

import ContentContainer from "../components/ContentContainer";
import Touchable from "./Touchable";
import NotificationIcon from "./NotificationIcon";

const styles = StyleSheet.create({
    container: {
        ...styleConstants.regularShadow,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: styleConstants.primary,
    },
    tabContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
    },
    iconContainer: {
        paddingTop: 8,
        paddingHorizontal: 16,
        position: "relative",
    },
    icon: {
        fontSize: styleConstants.iconFont,
    },
    text: {
        fontSize: styleConstants.smallFont,
        marginTop: 2,
        paddingBottom: 6,
        paddingHorizontal: 8,
    },
    notificationsContainer: {
        position: "absolute",
        top: -14,
        right: -16,
    },
    disabled: {
        opacity: 0.33,
    },
    highlight: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 10,
        height: 10,
        borderRadius: 5,
        overflow: "hidden", // ios
        backgroundColor: styleConstants.grey,
    },
});

export default (HeaderTabBar = props => {
    /* 
        PROPTYPES

        tabs: PropTypes.array.isRequired,
        backgroundColor: PropTypes.string,
        activeTab: PropTypes.string,
        handleTabPress: PropTypes.func,

        title: PropTypes.string,
        iconName: PropTypes.string,
        count: PropTypes.number,
        disabled: PropTypes.bool,
    */

    const tabs = props.tabs.map(value => {
        const colorStyles = {
            color:
                value.title === props.activeTab
                    ? styleConstants.white
                    : styleConstants.darkTransWhite,
        };

        const count = value.count ? (
            <View style={styles.notificationsContainer}>
                <NotificationIcon count={value.count} />
            </View>
        ) : null;

        const tab = value.disabled ? (
            <View
                style={[styles.tabContainer, styles.disabled]}
                key={"tab-" + value.title}>
                <View style={styles.iconContainer}>
                    <Icon
                        name={value.icon}
                        style={[styles.icon, colorStyles]}
                    />
                    {count}
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
        ) : value.title === props.activeTab ? (
            <View style={styles.tabContainer} key={"tab-" + value.title}>
                <View style={styles.iconContainer}>
                    <Icon
                        name={value.icon}
                        style={[styles.icon, colorStyles]}
                    />
                    {count}
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
                    {count}
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
        <View style={[styles.container, backgroundColorStyles]}>
            <ContentContainer style={{ flexDirection: "row" }}>
                {tabs}
            </ContentContainer>
        </View>
    );
});
