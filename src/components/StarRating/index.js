import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ViewPropTypes } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import utils from '../../utils';
import styles from './styles';
import Touchable from '../Touchable';

const propTypes = {
  rating: PropTypes.number,
  handlePress: PropTypes.func,
  androidRipple: PropTypes.bool,
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool,
  iconStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {};

const StarRating = ({
  rating,
  handlePress,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  iconStyle,
  style,
}) => {
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
      {starsArray.map((item, index) => {
        return (
          <Touchable
            key={item.id}
            onPress={() => handlePress(index + 1)} // ratings of 1 - 5
            androidRipple={androidRipple}
            androidRippleColor={androidRippleColor}
            androidRippleBorderless={androidRippleBorderless}
            disabled={!handlePress}
          >
            <Icon name={item.iconName} style={[styles.icon, iconStyle]} />
          </Touchable>
        );
      })}
    </View>
  );
};

StarRating.propTypes = propTypes;
StarRating.defaultProps = defaultProps;

export default StarRating;
