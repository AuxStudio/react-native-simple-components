import React from "react";
import PropTypes from "prop-types";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    StyleSheet,
    Platform,
} from "react-native";

import utilities from "../utilities";
import styleConstants from "../assets/styleConstants";

import AnimateTranslateX from "../animators/AnimateTranslateX";
import AnimateOpacity from "../animators/AnimateOpacity";
import Touchable from "./Touchable";
import DeleteButton from "./DeleteButton";

const styles = StyleSheet.create({
    inputWrapper: {
        width: styleConstants.windowWidth - 32,
        marginVertical: 16,
        alignSelf: "center",
    },
    inputLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputLabelText: {
        fontSize: styleConstants.smallFont,
    },
    input: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.white,
        paddingLeft: 0,
        paddingRight: 32,
    },

    clearTextButtonContainer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        height: 45.5,
        paddingLeft: 8,
        justifyContent: "center",
    },

    togglePasswordContainer: {},
    togglePasswordText: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.white,
    },

    characterCountContainer: {},
    characterCountText: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.lightGrey,
    },
});

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.focusInput = this.focusInput.bind(this);
        this.blurInput = this.blurInput.bind(this);
        this.clearInputText = this.clearInputText.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this.adjustInputHeight = this.adjustInputHeight.bind(this);

        this.minimumInputHeight = 45.5;
        this.inputLabelColourFocussed = styleConstants.secondary;
        this.inputLabelColourBlurred = styleConstants.lightGrey;
        this.inputBorderColourFocussed = styleConstants.white;
        this.inputBorderColourBlurred = styleConstants.lightGrey;

        this.state = {
            showTogglePasswordButton: false,
            showCharacterCount: false,
            hidePassword: true,
            inputHeight: this.minimumInputHeight,
            labelColour: this.inputLabelColourBlurred,
            borderColour: this.inputBorderColourBlurred,
        };
    }

    static get propTypes() {
        return {
            placeholder: PropTypes.string,
            handleChange: PropTypes.func.isRequired,
            handleFocus: PropTypes.func,
            handleBlur: PropTypes.func,
            value: PropTypes.string,
            type: PropTypes.string,
            keyboardType: PropTypes.string,
            autoFocus: PropTypes.bool,
            multiline: PropTypes.bool,
            maxLength: PropTypes.number,
        };
    }

    componentDidUpdate(prevProps) {
        if (
            this.state.labelColour !== this.inputLabelColourFocussed &&
            this.props.value
        ) {
            this.setState({
                labelColour: this.inputLabelColourFocussed,
                showTogglePasswordButton: true,
                showCharacterCount: true,
            });
        }

        // When our input has just received it's value after mounting
        if (!prevProps.value && this.props.value && this.props.multiline) {
            // Use utils to get input height based on inputWidth, fontSize and charCount
            const inputHeight = utilities.getInputHeight(
                styleConstants.windowWidth - 32,
                styleConstants.regularFont,
                this.props.value.length * 1.1 // 1.1, 1.2 still gives same result (necessary though)
            );

            this.adjustInputHeight(inputHeight);
        }
    }

    focusInput() {
        this.setState({
            labelColour: this.inputLabelColourFocussed,
            borderColour: this.inputBorderColourFocussed,
            showTogglePasswordButton: true,
            showCharacterCount: true,
        });

        this.props.handleFocus && this.props.handleFocus();
    }

    blurInput() {
        this.setState({
            labelColour: this.props.value
                ? this.inputLabelColourFocussed
                : this.inputLabelColourBlurred,
            borderColour: this.inputBorderColourBlurred,
            showTogglePasswordButton: this.props.value,
            showCharacterCount: this.props.value,
        });

        this.props.handleBlur && this.props.handleBlur();
    }

    clearInputText() {
        this.refs.input.focus();
        this.props.handleChange("");
        this.adjustInputHeight(0);
    }

    togglePassword() {
        this.setState({
            hidePassword: !this.state.hidePassword,
        });
    }

    adjustInputHeight(newInputHeight) {
        if (newInputHeight > this.minimumInputHeight) {
            this.setState({
                inputHeight: newInputHeight,
            });
        } else if (newInputHeight <= this.minimumInputHeight) {
            // If an input was cleared
            this.setState({
                inputHeight: this.minimumInputHeight,
            });
        }
    }

    render() {
        const togglePasswordButton = this.props.type === "password" &&
        this.state.showTogglePasswordButton && (
            <AnimateTranslateX initialValue={40} finalValue={0} shouldAnimateIn>
                <Touchable
                    onPress={this.togglePassword}
                    style={styles.togglePasswordContainer}>
                    <Text
                        style={[
                            styles.togglePasswordText,
                            styleConstants.primaryFont,
                        ]}>
                        {this.state.hidePassword ? "Show" : "Hide"}
                    </Text>
                </Touchable>
            </AnimateTranslateX>
        );

        const characterCount = this.props.maxLength &&
        this.state.showCharacterCount && (
            <AnimateTranslateX initialValue={40} finalValue={0} shouldAnimateIn>
                <View style={styles.characterCountContainer}>
                    <Text
                        style={[
                            styles.characterCountText,
                            styleConstants.primaryFont,
                        ]}>
                        {(this.props.value ? this.props.value.length : 0) +
                            " / " +
                            this.props.maxLength}
                    </Text>
                </View>
            </AnimateTranslateX>
        );

        const clearTextButton = this.props.value ? (
            <AnimateOpacity
                initialValue={0}
                finalValue={1}
                shouldAnimateIn
                style={styles.clearTextButtonContainer}>
                <DeleteButton handlePress={this.clearInputText} />
            </AnimateOpacity>
        ) : null;

        const inputLabelStyles = {
            color: this.state.labelColour,
        };

        // Fix for ios
        const inputContainerStyles = Platform.OS === "ios" && {
            borderBottomWidth: 1,
            borderBottomColor: this.state.borderColour,
        };

        // Fix for Android
        const androidInputStyles = Platform.OS === "android" && {
            borderBottomWidth: 1,
            borderBottomColor: this.state.borderColour,
        };

        const inputStyles = {
            height: this.state.inputHeight,
        };

        return (
            <TouchableWithoutFeedback onPress={() => this.refs.input.focus()}>
                <View style={[styles.inputWrapper, inputContainerStyles]}>
                    <View style={styles.inputLabelContainer}>
                        <Text
                            style={[
                                styles.inputLabelText,
                                inputLabelStyles,
                                styleConstants.primaryFont,
                            ]}>
                            {this.props.placeholder}
                        </Text>
                        {togglePasswordButton}
                        {characterCount}
                    </View>
                    <TextInput
                        ref="input"
                        value={this.props.value ? this.props.value : ""}
                        underlineColorAndroid="transparent"
                        style={[
                            styles.input,
                            androidInputStyles,
                            inputStyles,
                            styleConstants.primaryFont,
                        ]}
                        onChangeText={text => this.props.handleChange(text)}
                        onFocus={this.focusInput}
                        onBlur={this.blurInput}
                        secureTextEntry={
                            this.props.type === "password" &&
                            this.state.hidePassword
                        }
                        keyboardType={
                            this.props.keyboardType ? (
                                this.props.keyboardType
                            ) : (
                                "default"
                            )
                        }
                        autoFocus={this.props.autoFocus}
                        multiline={this.props.multiline}
                        maxLength={this.props.maxLength}
                        onChange={
                            this.props.multiline ? (
                                event =>
                                    this.adjustInputHeight(
                                        event.nativeEvent.contentSize.height
                                    )
                            ) : null /*NOTE: this does not work with onContentSizeChange */
                        }
                    />
                    {clearTextButton}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
