import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 0,
    backgroundColor: styleConstants.dividerColor,
  },
  icon: {
    fontSize: styleConstants.smallFont,
    color: styleConstants.primaryText,
  },
});

export default styles;
