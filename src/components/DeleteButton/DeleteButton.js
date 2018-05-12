import React from 'react';

import styles from './styles';
import styleConstants from '../assets/styleConstants';

import ButtonIcon from './ButtonIcon';

export default (DeleteButton = (props) => {
  /*
        PROPTYPES

        handlePress: PropTypes.func.isRequired,

        // iconStyle: PropTypes.node,
        // style: PropTypes.node,
    */

  return (
    <ButtonIcon
      handlePress={props.handlePress}
      iconName="close"
      iconStyle={[styles.icon, props.iconStyle]}
      style={[styles.container, props.style]}
    />
  );
});
