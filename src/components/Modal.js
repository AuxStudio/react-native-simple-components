import React from "react";
import { View, Modal, StyleSheet } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: styleConstants.darkTransparent,
    },
    container: {
        backgroundColor: styleConstants.white,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        borderRadius: 4,
    },
    closeIconContainer: {
        position: "absolute",
        top: 0,
        right: 0,
    },
    closeIconButton: {
        padding: 8,
    },
    closeIcon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.white,
    },
});

export default (Modal = props => {
    /*
        PROPTYPES

        handleClose: PropTypes.func.isRequired
        children: PropTypes.node,

        // style: PropTypes.node,
    */

    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={true}
                onRequestClose={props.handleClose}>
                <View style={styles.wrapper}>
                    <View style={[styles.container, props.style]}>
                        {props.children}
                    </View>
                    <View style={styles.closeIconContainer}>
                        <Touchable
                            onPress={props.handleClose}
                            style={styles.closeIconButton}>
                            <MaterialIcon
                                name="close"
                                style={styles.closeIcon}
                            />
                        </Touchable>
                    </View>
                </View>
            </Modal>
        </View>
    );
});
