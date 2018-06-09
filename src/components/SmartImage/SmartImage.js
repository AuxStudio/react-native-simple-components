import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes, Text, Image, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../../styleConstants';

export default class SmartImage extends React.Component {
  static propTypes = {
    source: PropTypes.oneOfType([
      PropTypes.shape({
        uri: PropTypes.string,
      }), // remote
      PropTypes.number, // local
    ]),
    iconStyle: Text.propTypes.style,
    style: ViewPropTypes.style,
    loaderColor: PropTypes.string,
  };

  static defaultProps = {
    loaderColor: styleConstants.colors.primaryText,
  };

  state = {
    isLoading: true,
    hasError: false,
    isOffline: false,
  };

  setError = (event) => {
    if (event.nativeEvent.error === 'The Internet connection appears to be offline.') {
      this.setState({
        hasError: true,
        isOffline: true,
      });
    } else {
      this.setState({
        hasError: true,
      });
    }
    this.setLoading(false);
  };

  setLoading = (isLoading) => {
    this.setState({
      isLoading,
    });
  };

  render() {
    let backgroundComponent;

    if (this.state.hasError) {
      const iconName = this.state.isOffline ? 'signal-cellular-off' : 'error-outline';

      backgroundComponent = (
        <View style={styles.backgroundContainer}>
          <Icon name={iconName} style={[styles.icon, this.props.iconStyle]} testID="icon" />
        </View>
      );
    } else if (this.state.isLoading) {
      backgroundComponent = (
        <View style={styles.backgroundContainer}>
          <ActivityIndicator size="large" color={this.props.loaderColor} testID="loader" />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Image
          source={this.props.source}
          style={this.props.style}
          onLoadEnd={() => this.setLoading(false)}
          onError={this.setError}
        />
        {backgroundComponent}
      </View>
    );
  }
}
