import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  button: {},
  disabled: {
    opacity: 0.33,
  },
  text: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default styles;
