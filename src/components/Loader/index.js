import React from 'react';
import PropTypes from 'prop-types';
import { View, ViewPropTypes } from 'react-native';
import { AnimateOpacity, AnimateTranslateX } from 'react-native-simple-animators';

import styleConstants from '../../styleConstants';

const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string, // color of the loader
  duration: PropTypes.number, // duration of animation in ms
  style: ViewPropTypes.style,
  containerStyle: ViewPropTypes.style,
  wrapperStyle: ViewPropTypes.style,
};

const defaultProps = {
  width: 100,
  height: 5,
  color: styleConstants.colors.primary,
  duration: 2000,
};

const Loader = ({ width, height, color, duration, style, containerStyle, wrapperStyle }) => {
  return (
    <AnimateOpacity initialValue={0} finalValue={1} shouldAnimateIn style={wrapperStyle}>
      <AnimateTranslateX
        initialValue={width * -1}
        finalValue={styleConstants.dimensions.window.width}
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
      </AnimateTranslateX>
    </AnimateOpacity>
  );
};

Loader.propTypes = propTypes;
Loader.defaultProps = defaultProps;

export default Loader;
