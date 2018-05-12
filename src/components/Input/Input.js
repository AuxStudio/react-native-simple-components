import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableWithoutFeedback, TextInput, Platform } from 'react-native';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import {
  AnimateTranslateX,
  AnimateTranslateY,
  AnimateOpacity,
} from 'react-native-simple-animators';
import Touchable from './Touchable';
import DeleteButton from './DeleteButton';

export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.focusInput = this.focusInput.bind(this);
    this.blurInput = this.blurInput.bind(this);
    this.clearInputText = this.clearInputText.bind(this);
    this.togglePassword = this.togglePassword.bind(this);

    this.state = {
      showTogglePasswordButton: false,
      showCharacterCount: false,
      hidePassword: true,
      floatPlaceholder: false,
    };
  }

  static get propTypes() {
    return {
      labelText: PropTypes.string, // if supplied, will render a label
      floatPlaceholder: PropTypes.bool, // will float the placeholder text on input focus (material design pattern)
      placeholderFocussedPosition: PropTypes.number,
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
      multiline: PropTypes.bool, // will autogrow based on contents (using react-native-autogrow-textinput)
      maxCharacterCount: PropTypes.number, // will render character count text if supplied
      showDeleteButton: PropTypes.bool, // if supplied, will render a delete button to clear the input
      returnKeyType: PropTypes.string,
      blurOnSubmit: PropTypes.bool,
      autoCorrect: PropTypes.bool,

      // labelTextStyle: PropTypes.node,
      // labelContainerStyle: PropTypes.node,
      // deleteButtonStyle: PropTypes.node,
      // deleteButtonIconStyle: PropTypes.node,
      // characterCountTextStyle: PropTypes.node,
      // togglePasswordTextStyle: PropTypes.node,
      // style: PropTypes.node,
      // placeholderTextContainerStyle: PropTypes.node,
      // placeholderTextStyle: PropTypes.node, // only if floatPlaceholder supplied
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.value && !prevProps.value) {
      this.setState({
        showTogglePasswordButton: true,
        showCharacterCount: true,
      });
    }

    if (this.props.autoFocus && !prevProps.autoFocus) {
      this.refs.input.focus();
    }
  }

  focusInput() {
    this.setState({
      showTogglePasswordButton: true,
      showCharacterCount: true,
      floatPlaceholder: this.props.floatPlaceholder,
    });

    this.props.handleFocus && this.props.handleFocus();
  }

  blurInput() {
    this.setState({
      showTogglePasswordButton: this.props.value,
      showCharacterCount: this.props.value,
      floatPlaceholder: this.props.value ? true : false,
    });

    this.props.handleBlur && this.props.handleBlur();
  }

  clearInputText() {
    this.refs.input.focus();
    this.props.handleChange('');
  }

  togglePassword() {
    this.setState({
      hidePassword: !this.state.hidePassword,
    });
  }

  render() {
    const label = this.props.labelText ? (
      <Text style={[styles.inputLabelText, this.props.labelTextStyle]}>{this.props.labelText}</Text>
    ) : null;

    const togglePasswordButton =
      this.props.inputType === 'password' && this.state.showTogglePasswordButton ? (
        <AnimateTranslateX initialValue={40} finalValue={0} shouldAnimateIn>
          <Touchable onPress={this.togglePassword} style={styles.togglePasswordContainer}>
            <Text style={[styles.togglePasswordText, this.props.togglePasswordTextStyle]}>
              {this.state.hidePassword ? 'Show' : 'Hide'}
            </Text>
          </Touchable>
        </AnimateTranslateX>
      ) : null;

    const characterCount =
      this.props.maxCharacterCount && this.state.showCharacterCount ? (
        <AnimateTranslateX initialValue={40} finalValue={0} shouldAnimateIn>
          <View style={styles.characterCountContainer}>
            <Text style={[styles.characterCountText, this.props.characterCountTextStyle]}>
              {(this.props.value ? this.props.value.length : 0) +
                ' / ' +
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
          style={styles.clearTextButtonContainer}
        >
          <DeleteButton
            handlePress={this.clearInputText}
            iconStyle={this.props.deleteButtonIconStyle}
            style={this.props.deleteButtonStyle}
          />
        </AnimateOpacity>
      ) : null;

    const placeholderText = this.props.floatPlaceholder && (
      <AnimateTranslateY
        initialValue={0}
        finalValue={
          this.props.placeholderFocussedPosition ? this.props.placeholderFocussedPosition : -24
        }
        shouldAnimateIn={this.state.floatPlaceholder}
        shouldAnimateOut={!this.state.floatPlaceholder}
        style={[styles.placeholderTextContainer, this.props.placeholderTextContainerStyle]}
      >
        <Text
          style={[
            styles.placeholderText,
            { color: this.props.placeholderTextColor },
            this.props.placeholderTextStyle,
          ]}
        >
          {this.props.placeholder}
        </Text>
      </AnimateTranslateY>
    );

    return (
      <TouchableWithoutFeedback onPress={() => this.refs.input.focus()}>
        <View style={styles.inputWrapper}>
          <View style={[styles.inputLabelContainer, this.props.labelContainerStyle]}>
            {label}
            {togglePasswordButton}
            {characterCount}
          </View>
          {placeholderText}
          <TextInput
            ref="input"
            placeholder={!this.props.floatPlaceholder ? this.props.placeholder : null}
            placeholderTextColor={
              !this.props.floatPlaceholder ? this.props.placeholderTextColor : null
            }
            value={this.props.value ? this.props.value : ''}
            underlineColorAndroid="transparent"
            style={[
              styles.input,
              this.props.floatPlaceholder && {
                marginTop: 20,
              },
              this.props.style,
            ]}
            onChangeText={(text) => this.props.handleChange(text)}
            onSubmitEditing={this.props.handleSubmit}
            onFocus={this.focusInput}
            onBlur={this.blurInput}
            secureTextEntry={this.props.inputType === 'password' && this.state.hidePassword}
            keyboardType={this.props.keyboardType ? this.props.keyboardType : 'default'}
            autoFocus={this.props.autoFocus}
            multiline={this.props.multiline}
            autoGrow={this.props.multiline}
            maxLength={this.props.maxCharacterCount}
            returnKeyType={this.props.returnKeyType}
            blurOnSubmit={this.props.blurOnSubmit}
            autoCorrect={this.props.autoCorrect}
          />
          {clearTextButton}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
