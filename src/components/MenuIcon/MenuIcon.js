import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import { AnimateRotate } from 'react-native-simple-animators';
import { TouchableIcon } from 'react-native-simple-components';

export default class MenuIcon extends React.Component {
  constructor(props) {
    super(props);

    this.toggleIconRotation = this.toggleIconRotation.bind(this);

    this.state = {
      shouldRotate: false,
    };
  }

  static get propTypes() {
    return {
      handlePress: PropTypes.func,
      // style: PropTypes.node,
      // iconStyle: PropTypes.node,
    };
  }

  toggleIconRotation() {
    this.setState({
      shouldRotate: !this.state.shouldRotate,
    });

    this.props.handlePress && this.props.handlePress();
  }

  render() {
    return (
      <AnimateRotate
        initialValue={0}
        finalValue={-180}
        shouldAnimateIn={this.state.shouldRotate}
        shouldAnimateOut={!this.state.shouldRotate}
      >
        <TouchableIcon
          iconName="chevron-left"
          style={[styles.button, this.props.style]}
          iconStyle={[styles.icon, this.props.iconStyle]}
          handlePress={this.toggleIconRotation}
        />
      </AnimateRotate>
    );
  }
}
