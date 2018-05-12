import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import LoaderComponent from './LoaderComponent';

export default (Loader = (props) => {
  /*
        static get propTypes() {
            return {
                loading: PropTypes.bool, // flag to display loader
                color: PropTypes.string, // color of the loader
                duration: PropTypes.number, // duration of animation in ms (default is 2000)
                // containerStyle: PropTypes.node,
                // style: PropTypes.node,
            };
        }
    */

  const loader = props.loading && (
    <LoaderComponent color={props.color} duration={props.duration} style={props.style} />
  );

  return <View style={[styles.wrapper, props.containerStyle]}>{loader}</View>;
});
