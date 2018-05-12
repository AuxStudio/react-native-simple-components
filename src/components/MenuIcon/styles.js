import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  button: {},
  icon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
    transform: [{ rotate: '270deg' }],
    textAlign: 'center',
  },
});

export default styles;
