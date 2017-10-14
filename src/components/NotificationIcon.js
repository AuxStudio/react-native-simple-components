import React from "react";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    notificationsButton: {
        padding: 16,
        paddingRight: 8,
    },
    notificationsContainer: {
        ...styleConstants.smallShadow,
        width: 20,
        height: 20,
        borderRadius: 10,
        overflow: "hidden", // ios
        backgroundColor: styleConstants.veryLightGrey,
        justifyContent: "center",
        alignItems: "center",
    },
    smallText: {
        fontSize: styleConstants.verySmallFont,
        color: styleConstants.white,
        marginBottom: 2,
    },
});

export default (NotificationIcon = props => {
    /*
        PROPTYPES
            handlePress     PropTypes.func
            count           PropTypes.number
    */

    const notificationsContainerStyles = props.count > 0 && {
        backgroundColor: styleConstants.secondary,
    };

    const notificationsIcon = props.handlePress ? (
        <Touchable
            onPress={props.handlePress}
            style={styles.notificationsButton}>
            <View
                style={[
                    styles.notificationsContainer,
                    notificationsContainerStyles,
                ]}>
                <Text style={[styles.smallText, styleConstants.primaryFont]}>
                    {props.count}
                </Text>
            </View>
        </Touchable>
    ) : (
        <View style={styles.notificationsButton}>
            <View
                style={[
                    styles.notificationsContainer,
                    notificationsContainerStyles,
                ]}>
                <Text style={[styles.smallText, styleConstants.primaryFont]}>
                    {props.count}
                </Text>
            </View>
        </View>
    );

    return notificationsIcon;
});
