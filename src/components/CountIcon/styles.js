import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    overflow: 'hidden', // ios
    backgroundColor: styleConstants.dividerColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: styleConstants.verySmallFont,
    color: styleConstants.primaryText,
    marginBottom: 1.5,
  },
});

export default styles;
