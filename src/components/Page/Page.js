import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

export default (Page = (props) => {
  /* 
        PROPTYPES

        children: PropTypes.node,
        dimensions: PropTypes.object, // can set width and height here (useful during testing)

        // style: PropTypes.node,

    */

  const dimensionsStyles = props.dimensions && props.dimensions;
  if (dimensionsStyles && dimensionsStyles.height) {
    dimensionsStyles['flex'] = 0;
  }

  return <View style={[styles.container, dimensionsStyles, props.style]}>{props.children}</View>;
});
