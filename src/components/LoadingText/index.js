import React from 'react';
import PropTypes from 'prop-types';
import { Text, ViewPropTypes } from 'react-native';
import Animator from 'react-native-simple-animators';

import styles from './styles';
import styleConstants from '../../styleConstants';

const propTypes = {
  text: PropTypes.string,
  initialOpacityValue: PropTypes.number,
  finalOpacityValue: PropTypes.number,
  initialTranslateXValue: PropTypes.number,
  finalTranslateXValue: PropTypes.number,
  duration: PropTypes.number,
  textStyle: Text.propTypes.style,
  style: ViewPropTypes.style,
};

const defaultProps = {
  text: "You can't see me",
  initialOpacityValue: 0.33,
  finalOpacityValue: 1,
  initialTranslateXValue: styleConstants.dimensions.window.width * -1,
  finalTranslateXValue: 0,
  duration: 750,
};

const LoadingText = ({
  text,
  initialOpacityValue,
  finalOpacityValue,
  initialTranslateXValue,
  finalTranslateXValue,
  duration,
  textStyle,
  style,
}) => {
  return (
    <Animator
      type="opacity"
      initialValue={initialOpacityValue}
      finalValue={finalOpacityValue}
      shouldAnimateIn
      shouldRepeat
      duration={duration}
    >
      <Animator
        type="translateX"
        initialValue={initialTranslateXValue}
        finalValue={finalTranslateXValue}
        shouldAnimateIn
        duration={duration}
        style={[styles.container, style]}
      >
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </Animator>
    </Animator>
  );
};

LoadingText.propTypes = propTypes;
LoadingText.defaultProps = defaultProps;

export default LoadingText;
