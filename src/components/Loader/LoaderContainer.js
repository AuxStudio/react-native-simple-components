import React from "react";
import { View, StyleSheet } from "react-native";

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

export default (Loader = props => {
    /*
        static get propTypes() {
            return {
                loading: PropTypes.bool, // flag to display loader
                color: PropTypes.string, // color of the loader
                duration: PropTypes.number, // duration of animation (default is 2000)
            };
        }
    */

    const loader = props.loading && (
        <LoaderComponent color={props.color} duration={props.duration} />
    );

    return <View style={styles.container}>{loader}</View>;
});
