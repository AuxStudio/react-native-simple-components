import React from 'react';
import { ViewPropTypes, Text } from 'react-native';
import PropTypes from 'prop-types';
import { AnimateRotate } from 'react-native-simple-animators';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Touchable from '../Touchable';

export default class RotatingChevron extends React.Component {
  constructor(props) {
    super(props);

    this.toggleRotate = this.toggleRotate.bind(this);

    this.state = {
      shouldRotate: false,
    };
  }

  static get propTypes() {
    return {
      handlePress: PropTypes.func,
      androidRipple: PropTypes.bool,
      androidRippleColor: PropTypes.string,
      androidRippleBorderless: PropTypes.bool,
      iconStyle: Text.propTypes.style,
      style: ViewPropTypes.style,
      wrapperStyle: ViewPropTypes.style,
    };
  }

  static defaultProps = {};

  toggleRotate(event) {
    this.setState({
      shouldRotate: !this.state.shouldRotate,
    });

    if (this.props.handlePress) {
      this.props.handlePress(event);
    }
  }

  render() {
    return (
      <AnimateRotate
        initialValue={0}
        finalValue={-180}
        shouldAnimateIn={this.state.shouldRotate}
        shouldAnimateOut={!this.state.shouldRotate}
        style={this.props.wrapperStyle}
      >
        <Touchable
          onPress={this.toggleRotate}
          androidRipple={this.props.androidRipple}
          androidRippleColor={this.props.androidRippleColor}
          androidRippleBorderless={this.props.androidRippleBorderless}
          style={this.props.style}
        >
          <Icon name="chevron-left" style={[styles.icon, this.props.iconStyle]} />
        </Touchable>
      </AnimateRotate>
    );
  }
}
