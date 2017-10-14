import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { connect } from "react-redux";

import LoaderComponent from "./LoaderComponent";

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 5,
    },
});

export class Loader extends React.Component {
    static get propTypes() {
        return {
            loading: PropTypes.bool,
            forceLoading: PropTypes.bool,
            color: PropTypes.string,
        };
    }

    render() {
        const loader = (this.props.loading || this.props.forceLoading) && (
            <LoaderComponent color={this.props.color} />
        );

        return <View style={styles.container}>{loader}</View>;
    }
}

function mapStateToProps(state) {
    return {
        loading: state.main.appState.loading,
    };
}

export default connect(mapStateToProps)(Loader);
