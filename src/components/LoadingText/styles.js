import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.veryLightGrey,
    borderRadius: 16,
    overflow: 'hidden', // ios
  },
  text: {
    color: 'transparent',
    fontSize: styleConstants.smallFont,
  },
});

export default styles;
