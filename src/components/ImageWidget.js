import React from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import styleConstants from "../assets/styleConstants";

import Icon from "react-native-vector-icons/MaterialIcons";

export default class ImageWidget extends React.Component {
    constructor(props) {
        super(props);

        this.toggleLoading = this.toggleLoading.bind(this);

        this.state = {
            loading: false,
        };
    }

    static get propTypes() {
        return {
            source: PropTypes.any,
            isOffline: PropTypes.bool,
            style: PropTypes.any,
            loaderColor: PropTypes.string,
        };
    }

    toggleLoading(loading) {
        this.setState({
            loading,
        });
    }

    render() {
        const backgroundComponent = this.props.isOffline ? (
            <View style={styles.iconContainer}>
                <Icon name="signal-cellular-off" style={styles.icon} />
            </View>
        ) : (
            this.state.loading && (
                <View style={[styles.loaderContainer, this.props.loaderStyle]}>
                    <ActivityIndicator
                        size="large"
                        color={this.props.loaderColor}
                    />
                </View>
            )
        );

        return (
            <View style={styles.container}>
                <Image
                    source={this.props.source}
                    style={this.props.style}
                    onLoadStart={() =>
                        !this.state.loading && this.toggleLoading(true)
                    }
                    onLoadEnd={() =>
                        this.state.loading && this.toggleLoading(false)
                    }
                />
                {backgroundComponent}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {},
    loaderContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: styleConstants.white,
    },
    iconContainer: {
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.secondaryText,
    },
});
