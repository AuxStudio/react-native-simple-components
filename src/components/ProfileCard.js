import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

import Icon from "../assets/icons/index";
import styleConstants from "../assets/styleConstants";

import Photo from "./Photo";
import Touchable from "./Touchable";
import InfoBlock from "./InfoBlock";
import Label from "./Label";

const styles = StyleSheet.create({
    cardContainer: {
        ...styleConstants.smallShadow,
        position: "relative",
        width: styleConstants.windowWidth - 32,
        backgroundColor: styleConstants.realWhite,
        borderWidth: 1,
        borderColor: styleConstants.white,
        marginHorizontal: 16,
        paddingVertical: 16,
        paddingHorizontal: 8,
    },
    profileImageContainer: {
        position: "absolute",
        top: 16,
        right: 16,
    },
    profileImage: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: styleConstants.lightGrey,
    },
    profileImageIcon: {
        fontSize: styleConstants.largeFont,
        color: styleConstants.secondary,
    },
    editImageContainer: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: styleConstants.transPrimary,
    },
    editImageIcon: {
        fontSize: styleConstants.largeFont,
        color: styleConstants.white,
    },
    emailContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    emailIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.primary,
        marginRight: 8,
        marginTop: 2,
    },
    emailText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primary,
    },
    labelsContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16,
        alignItems: "flex-end",
    },
});

export default (ProfileCard = props => {
    /* 
        PROPTYPES

        showIcon: PropTypes.bool,
        userPhotoUrl: PropTypes.string,
        handleDeletePhoto: PropTypes.func,
        handleEditImagePress: PropTypes.func,
        numberOfIdeas: PropTypes.number,
        userName: PropTypes.string,
        userLocation: PropTypes.string,
        userEmail: PropTypes.string,
        handleEmailPress: PropTypes.func,
        
    */

    const profilePhoto = props.showIcon ? (
        <View style={styles.profileImageContainer}>
            <View style={styles.profileImage}>
                <Icon name="lightbulb" style={styles.profileImageIcon} />
            </View>
        </View>
    ) : props.userPhotoUrl ? (
        <Photo
            uri={props.userPhotoUrl}
            isThumbnail
            photoContainerStyles={styles.profileImageContainer}
            photoStyles={styles.profileImage}
            errorText="Photo not found"
            deleteOnErrorOnly
            handleDeletePhoto={props.handleDeletePhoto}
        />
    ) : (
        <View style={styles.profileImageContainer}>
            <Touchable
                onPress={props.handleEditImagePress}
                style={styles.editImageContainer}>
                <Icon name="camera" style={styles.editImageIcon} />
            </Touchable>
        </View>
    );

    const ideasLabelText =
        props.numberOfIdeas +
        " excellent idea" +
        (props.numberOfIdeas > 1 ? "s" : "");

    const ideasLabel = props.numberOfIdeas ? (
        <Label iconName="lightbulb" labelText={ideasLabelText} />
    ) : null;

    const email = props.handleEmailPress ? (
        <Touchable
            onPress={props.handleEmailPress}
            style={styles.emailContainer}>
            <Icon name="mail" style={styles.emailIcon} />
            <Text style={[styles.emailText, styleConstants.primaryFont]}>
                {props.userEmail}
            </Text>
        </Touchable>
    ) : (
        <View style={styles.emailContainer}>
            <Icon name="mail" style={styles.emailIcon} />
            <Text style={[styles.emailText, styleConstants.primaryFont]}>
                {props.userEmail}
            </Text>
        </View>
    );

    return (
        <View style={styles.cardContainer}>
            <InfoBlock
                title={props.userName}
                subtitle={props.userLocation}
                titleColor={styleConstants.primary}
                subtitleColor={styleConstants.grey}
            />

            {profilePhoto}

            {email}

            <View style={styles.labelsContainer}>{ideasLabel}</View>
        </View>
    );
});
