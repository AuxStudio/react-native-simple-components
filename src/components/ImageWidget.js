import React from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import PropTypes from "prop-types";

import styleConstants from "../assets/styleConstants";

export default class ImageWidget extends React.Component {
    constructor(props) {
        super(props);

        this.toggleLoading = this.toggleLoading.bind(this);

        this.state = {
            loading: true,
        };
    }

    static get propTypes() {
        return {
            source: PropTypes.any,
            style: PropTypes.any,
            loaderColor: PropTypes.string,
        };
    }

    toggleLoading() {
        this.setState({
            loading: !this.state.loading,
        });
    }

    render() {
        const loader = this.state.loading && (
            <View style={[styles.loaderContainer, this.props.loaderStyle]}>
                <ActivityIndicator
                    size="large"
                    color={this.props.loaderColor}
                />
            </View>
        );

        return (
            <View style={styles.container}>
                <Image
                    source={this.props.source}
                    style={this.props.style}
                    onLoadEnd={this.toggleLoading}
                    onError={this.toggleLoading}
                />
                {loader}
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
});
