import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

export default class Rating extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static get propTypes() {
    return {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Icon name="star" size={styleConstants.smallFont} color={styleConstants.white} />
        <Icon name="star" size={styleConstants.smallFont} color={styleConstants.white} />
        <Icon name="star" size={styleConstants.smallFont} color={styleConstants.white} />
        <Icon name="star" size={styleConstants.smallFont} color={styleConstants.white} />
        <Icon name="star-border" size={styleConstants.smallFont} color={styleConstants.white} />
      </View>
    );
  }
}
