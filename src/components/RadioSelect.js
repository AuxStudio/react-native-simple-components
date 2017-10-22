import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    container: {
        alignSelf: "stretch",
    },
    buttonsContainer: {
        marginTop: 8,
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center",
    },
    button: {
        ...styleConstants.smallShadow,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: styleConstants.lightGrey,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonInner: {
        backgroundColor: styleConstants.white,
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    labelContainer: {
        paddingVertical: 8,
    },
    label: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.lightGrey,
    },
});

export default class RadioSelect extends React.Component {
    constructor(props) {
        super(props);

        this.select = this.select.bind(this);
        this.setActive = this.setActive.bind(this);

        this.state = {
            active: null,
        };
    }

    static get propTypes() {
        return {
            currentValue: PropTypes.string.isRequired,
            values: PropTypes.array.isRequired,
            handleSelect: PropTypes.func,

            // buttonsContainerStyle: PropTypes.node,
            // textStyle: PropTypes.node,
            // buttonStyle: PropTypes.node,
            // activeButtonStyle: PropTypes.node,
            // activeButtonInnerStyle: PropTypes.node,
            // activeLabelStyle: PropTypes.node,
        };
    }

    componentDidMount() {
        if (this.props.currentValue) {
            this.setActive(this.props.currentValue);
        }
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.currentValue &&
            this.props.currentValue !== prevProps.currentValue &&
            this.props.currentValue !== this.state.active
        ) {
            this.setActive(this.props.currentValue);
        }
    }

    select(value) {
        this.setActive(value);
        this.props.handleSelect(value);
    }

    setActive(value) {
        this.setState({
            active: value,
        });
    }

    render() {
        const radioButtons = this.props.values.map(value => {
            let activeButtonStyles;
            let activeButtonInnerStyles;
            let activeLabelStyles;

            if (this.state.active === value) {
                activeButtonStyles = {
                    borderColor: styleConstants.white,
                    ...this.props.activeButtonStyle,
                };
                activeButtonInnerStyles = {
                    backgroundColor: styleConstants.primary,
                    ...this.props.activeButtonInnerStyle,
                };
                activeLabelStyles = {
                    color: styleConstants.black,
                    ...this.props.activeLabelStyle,
                };
            }

            return (
                <Touchable
                    key={"radio-" + value}
                    style={styles.buttonContainer}
                    onPress={() => this.select(value)}>
                    <View style={[styles.button, activeButtonStyles]}>
                        <View
                            style={[
                                styles.buttonInner,
                                activeButtonInnerStyles,
                            ]}
                        />
                    </View>
                    <View style={styles.labelContainer}>
                        <Text
                            style={[
                                styles.label,
                                this.props.textStyle,
                                activeLabelStyles,
                            ]}>
                            {value}
                        </Text>
                    </View>
                </Touchable>
            );
        });

        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.buttonsContainer,
                        this.props.buttonsContainerStyle,
                    ]}>
                    {radioButtons}
                </View>
            </View>
        );
    }
}
