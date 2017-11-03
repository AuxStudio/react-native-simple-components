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

import styleConstants from "../assets/styleConstants";

import {
    AnimateTranslateX,
    AnimateOpacity,
} from "react-native-simple-animators";
import Touchable from "./Touchable";
import DeleteButton from "./DeleteButton";

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        this.focusInput = this.focusInput.bind(this);
        this.blurInput = this.blurInput.bind(this);
        this.clearInputText = this.clearInputText.bind(this);
        this.togglePassword = this.togglePassword.bind(this);
        this.getInputHeight = this.getInputHeight.bind(this);
        this.setInputHeight = this.setInputHeight.bind(this);

        this.minimumInputHeight = 45.5;

        this.state = {
            showTogglePasswordButton: false,
            showCharacterCount: false,
            hidePassword: true,
            inputHeight: this.minimumInputHeight,
        };
    }

    static get propTypes() {
        return {
            labelText: PropTypes.string, // if supplied, will render a label
            placeholder: PropTypes.string,
            placeholderTextColor: PropTypes.string,
            value: PropTypes.string,
            handleChange: PropTypes.func.isRequired,
            handleSubmit: PropTypes.func,
            handleFocus: PropTypes.func,
            handleBlur: PropTypes.func,
            inputType: PropTypes.string, // password will render a show/hide password button
            keyboardType: PropTypes.string,
            autoFocus: PropTypes.bool,
            multiline: PropTypes.bool, // will autogrow based on contents
            maxCharacterCount: PropTypes.number, // will render character count text if supplied
            showDeleteButton: PropTypes.bool, // if supplied, will render a delete button to clear the input
            returnKeyType: PropTypes.string,

            // labelTextStyle: PropTypes.node,
            // deleteButtonStyle: PropTypes.node,
            // deleteButtonIconStyle: PropTypes.node,
            // characterCountTextStyle: PropTypes.node,
            // togglePasswordTextStyle: PropTypes.node,
            // style: PropTypes.node,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.value && !prevProps.value) {
            this.setState({
                showTogglePasswordButton: true,
                showCharacterCount: true,
            });
        }

        // When our input has just received it's value after mounting
        if (!prevProps.value && this.props.value && this.props.multiline) {
            // Use utils to get input height based on inputWidth, fontSize and charCount
            const inputHeight = this.getInputHeight(
                styleConstants.windowWidth - 32, // TODO: this is not dynamic
                styleConstants.regularFont,
                this.props.value.length * 1.1 // 1.1, 1.2 still gives same result (necessary though)
            );

            this.setInputHeight(inputHeight);
        }
    }

    focusInput() {
        this.setState({
            showTogglePasswordButton: true,
            showCharacterCount: true,
        });

        this.props.handleFocus && this.props.handleFocus();
    }

    blurInput() {
        this.setState({
            showTogglePasswordButton: this.props.value,
            showCharacterCount: this.props.value,
        });

        this.props.handleBlur && this.props.handleBlur();
    }

    clearInputText() {
        this.refs.input.focus();
        this.props.handleChange("");
        this.setInputHeight(0);
    }

    togglePassword() {
        this.setState({
            hidePassword: !this.state.hidePassword,
        });
    }

    getInputHeight(inputWidth, inputLineHeight, charCount) {
        const charsPerLine = Math.floor(inputWidth / inputLineHeight);
        const numberOfLines = Math.ceil(charCount / charsPerLine);
        const inputHeight = Math.ceil(numberOfLines * inputLineHeight);

        return inputHeight;
    }

    setInputHeight(newInputHeight) {
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
        const inputStyles = {
            height: this.state.inputHeight,
        };

        const label = this.props.labelText ? (
            <Text style={[styles.inputLabelText, this.props.labelTextStyle]}>
                {this.props.labelText}
            </Text>
        ) : null;

        const togglePasswordButton =
            this.props.inputType === "password" &&
            this.state.showTogglePasswordButton ? (
                <AnimateTranslateX
                    initialValue={40}
                    finalValue={0}
                    shouldAnimateIn>
                    <Touchable
                        onPress={this.togglePassword}
                        style={styles.togglePasswordContainer}>
                        <Text
                            style={[
                                styles.togglePasswordText,
                                this.props.togglePasswordTextStyle,
                            ]}>
                            {this.state.hidePassword ? "Show" : "Hide"}
                        </Text>
                    </Touchable>
                </AnimateTranslateX>
            ) : null;

        const characterCount =
            this.props.maxCharacterCount && this.state.showCharacterCount ? (
                <AnimateTranslateX
                    initialValue={40}
                    finalValue={0}
                    shouldAnimateIn>
                    <View style={styles.characterCountContainer}>
                        <Text
                            style={[
                                styles.characterCountText,
                                this.props.characterCountTextStyle,
                            ]}>
                            {(this.props.value ? this.props.value.length : 0) +
                                " / " +
                                this.props.maxCharacterCount}
                        </Text>
                    </View>
                </AnimateTranslateX>
            ) : null;

        const clearTextButton =
            this.props.showDeleteButton && this.props.value ? (
                <AnimateOpacity
                    initialValue={0}
                    finalValue={1}
                    shouldAnimateIn
                    style={styles.clearTextButtonContainer}>
                    <DeleteButton
                        handlePress={this.clearInputText}
                        iconStyle={this.props.deleteButtonIconStyle}
                        style={this.props.deleteButtonStyle}
                    />
                </AnimateOpacity>
            ) : null;

        return (
            <TouchableWithoutFeedback onPress={() => this.refs.input.focus()}>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputLabelContainer}>
                        {label}
                        {togglePasswordButton}
                        {characterCount}
                    </View>
                    <TextInput
                        ref="input"
                        placeholder={this.props.placeholder}
                        placeholderTextColor={this.props.placeholderTextColor}
                        value={this.props.value ? this.props.value : ""}
                        underlineColorAndroid="transparent"
                        style={[styles.input, inputStyles, this.props.style]}
                        onChangeText={text => this.props.handleChange(text)}
                        onSubmitEditing={this.props.handleSubmit}
                        onFocus={this.focusInput}
                        onBlur={this.blurInput}
                        secureTextEntry={
                            this.props.inputType === "password" &&
                            this.state.hidePassword
                        }
                        keyboardType={
                            this.props.keyboardType
                                ? this.props.keyboardType
                                : "default"
                        }
                        autoFocus={this.props.autoFocus}
                        multiline={this.props.multiline}
                        maxLength={this.props.maxCharacterCount}
                        onContentSizeChange={event => {
                            this.setInputHeight(
                                event.nativeEvent.contentSize.height
                            );
                        }}
                        returnKeyType={this.props.returnKeyType}
                    />
                    {clearTextButton}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    inputWrapper: {
        marginVertical: 16,
        alignSelf: "stretch",
    },
    inputLabelContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inputLabelText: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.secondaryText,
    },
    input: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primaryText,
        paddingLeft: 0,
        paddingRight: 32,
        borderBottomWidth: 1,
        borderBottomColor: styleConstants.dividerColor,
    },

    clearTextButtonContainer: {
        position: "absolute",
        bottom: 4,
        right: 0,
        padding: 8,
    },

    togglePasswordContainer: {
        paddingRight: 8,
    },
    togglePasswordText: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.secondaryText,
    },

    characterCountContainer: {
        paddingRight: 8,
    },
    characterCountText: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.secondaryText,
    },
});
