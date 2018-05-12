import React from 'react';
import { View, ScrollView, Text } from 'react-native';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';

export default (InfoBlock = (props) => {
  /* 
        PROPTYPES

        title: PropTypes.string,
        description: PropTypes.string,

        // titleTextStyle: PropTypes.node,
        // descriptionTextStyle: PropTypes.node,
    */

  return (
    <View style={styles.infoContainer}>
      <Text style={[styles.infoTextTitle, props.titleTextStyle]}>{props.title}</Text>
      <Text style={[styles.infoTextDescription, props.descriptionTextStyle]}>
        {props.description}
      </Text>
    </View>
  );
});
