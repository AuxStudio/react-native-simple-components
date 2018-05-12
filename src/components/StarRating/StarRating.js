import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function StarRating(props) {
  // static get propTypes() {
  //     return {
  //         rating: PropTypes.number,

  //         // style: PropTypes.node,
  //         // iconStyle: PropTypes.node,
  //     };
  // }

  const maxStars = 5;
  const starsArray = [];
  for (let i = 0; i < maxStars; i++) {
    if (i < props.rating) {
      starsArray.push(
        <Icon
          key={'star-' + i}
          name="star"
          size={styleConstants.smallFont}
          color={styleConstants.white}
          style={props.iconStyle}
        />,
      );
    } else {
      starsArray.push(
        <Icon
          key={'star-border-' + i}
          name="star-border"
          size={styleConstants.smallFont}
          color={styleConstants.white}
          style={props.iconStyle}
        />,
      );
    }
  }

  return (
    <View style={[styles.container, props.style]}>
      {starsArray.map((item, index) => {
        return item;
      })}
    </View>
  );
}
