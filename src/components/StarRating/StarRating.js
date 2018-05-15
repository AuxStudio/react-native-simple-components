import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import utils from '../../utils';
import styles from './styles';

const propTypes = {
  rating: PropTypes.number,
  iconStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {};

const StarRating = ({ rating, iconStyle, style }) => {
  const maxStars = 5;
  const starsArray = [];
  for (let i = 0; i < maxStars; i += 1) {
    if (i < rating) {
      starsArray.push({
        iconName: 'star',
        id: utils.createUID(), // id is needed for map function below
      });
    } else {
      starsArray.push({
        iconName: 'star-border',
        id: utils.createUID(),
      });
    }
  }

  return (
    <View style={[styles.container, style]}>
      {starsArray.map((item) => {
        return <Icon key={item.id} name={item.iconName} style={[styles.icon, iconStyle]} />;
      })}
    </View>
  );
};

StarRating.propTypes = propTypes;
StarRating.defaultProps = defaultProps;

export default StarRating;
