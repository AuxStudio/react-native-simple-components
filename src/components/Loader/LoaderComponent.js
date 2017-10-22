import React from "react";
import { View, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import {
    AnimateOpacity,
    AnimateTranslateX,
} from "react-native-simple-animators";

import styleConstants from "../../assets/styleConstants";

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 5,
    },
});

export default (LoaderComponent = props => {
    /*
        static get propTypes() {
            return {
                color: PropTypes.string,
                duration: PropTypes.number,
                style: PropTypes.oneOf([    
                    PropTypes.object,
                    PropTypes.number,
                ])
            };
        }
    */

    return (
        <AnimateOpacity initialValue={0} finalValue={1} shouldAnimateIn>
            <AnimateTranslateX
                initialValue={-100 /* width of loader */}
                finalValue={styleConstants.windowWidth}
                shouldAnimateIn
                shouldRepeat
                shouldLoop
                duration={props.duration ? props.duration : 2000}>
                <View
                    style={[
                        styles.container,
                        {
                            backgroundColor: props.color
                                ? props.color
                                : styleConstants.primary,
                        },
                        props.style,
                    ]}
                />
            </AnimateTranslateX>
        </AnimateOpacity>
    );
});
