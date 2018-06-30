import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import Animator from 'react-native-simple-animators';

import styleConstants from '../../styleConstants';

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  containerWidth: PropTypes.number,
  color: PropTypes.string, // color of the loader
  duration: PropTypes.number, // duration of animation in ms
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
};

const defaultProps = {
  width: 100,
  height: 5,
  containerWidth: styleConstants.dimensions.window.width,
  color: styleConstants.colors.primary,
  duration: 2000,
};

const Loader = ({
  width,
  height,
  containerWidth,
  color,
  duration,
  style,
  containerStyle,
  wrapperStyle,
}) => {
  return (
    <Animator type="opacity" initialValue={0} finalValue={1} shouldAnimateIn style={wrapperStyle}>
      <Animator
        type="translateX"
        initialValue={width * -1}
        finalValue={containerWidth}
        shouldAnimateIn
        shouldRepeat
        shouldLoop
        duration={duration}
        style={containerStyle}
      >
        <View
          style={[
            {
              width,
              height,
              backgroundColor: color,
            },
            style,
          ]}
        />
      </Animator>
    </Animator>
  );
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
