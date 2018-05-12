import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';
import styleConstants from '../../assets/styleConstants';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { AnimateTranslateY } from 'react-native-simple-animators';
import Touchable from '../Touchable';

export default class SnackBarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.hideSnackBar = this.hideSnackBar.bind(this);

    this.state = {
      hideSnackBar: false,
    };
  }

  static get propTypes() {
    return {
      iconName: PropTypes.string,
      customIcon: PropTypes.node,
      text: PropTypes.string,
      actionText: PropTypes.string,
      showCloseButton: PropTypes.bool,
      handleClose: PropTypes.func,
      handleRetry: PropTypes.func,
      handleAction: PropTypes.func,
      shouldAutoHide: PropTypes.bool,
      autoHideDuration: PropTypes.number,

      // iconStyle: PropTypes.node,
      // textStyle: PropTypes.node,
      // retryTextStyle: PropTypes.node,
      // actionTextStyle: PropTypes.node,
      // closeIconStyle: PropTypes.node,
      // containerStyle: PropTypes.node,
    };
  }

  static defaultProps = {
    autoHideDuration: 2000,
  };

  componentDidMount() {
    // Auto hide snack bar
    if (this.props.shouldAutoHide) {
      setTimeout(() => {
        this.hideSnackBar();
      }, this.props.autoHideDuration);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.shouldAutoHide && !prevProps.autoHide) {
      setTimeout(() => {
        !this.state.hideSnackBar && this.hideSnackBar();
      }, this.props.autoHideDuration);
    }
  }

  hideSnackBar() {
    this.setState({
      hideSnackBar: true,
    });

    setTimeout(() => {
      this.props.handleClose && this.props.handleClose();
    }, 500);
  }

  render() {
    const icon = this.props.customIcon ? (
      this.props.customIcon
    ) : this.props.iconName ? (
      <MaterialIcon name={this.props.iconName} style={[styles.icon, this.props.iconStyle]} />
    ) : null;

    const actionButton = (this.props.handleRetry ||
      (this.props.actionText && this.props.handleAction)) && (
      <Touchable
        onPress={this.props.handleRetry ? this.props.handleRetry : this.props.handleAction}
        style={styles.actionButton}
      >
        <Text
          style={[styles.actionButtonText, this.props.retryTextStyle, this.props.actionTextStyle]}
        >
          {this.props.actionText ? this.props.actionText : 'RETRY'}
        </Text>
      </Touchable>
    );

    const closeButton = this.props.showCloseButton && (
      <Touchable onPress={this.hideSnackBar} style={styles.closeIconContainer}>
        <MaterialIcon name="close" style={[styles.closeIcon, this.props.closeIconStyle]} />
      </Touchable>
    );

    return (
      <AnimateTranslateY
        initialValue={100}
        finalValue={0}
        shouldAnimateIn
        shouldAnimateOut={this.state.hideSnackBar}
        animateOutCallback={this.props.handleClose}
        style={[styles.messageWrapper, this.props.containerStyle]}
      >
        <View style={styles.messageContainer}>
          <View style={styles.iconContainer}>{icon}</View>
          <View style={styles.messageTextContainer}>
            <Text style={[styles.messageText, this.props.textStyle]}>{this.props.text}</Text>
            {actionButton}
          </View>
        </View>
        {closeButton}
      </AnimateTranslateY>
    );
  }
}
