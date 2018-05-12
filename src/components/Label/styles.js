import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.dividerColor,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  icon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
    marginRight: 8,
  },
  text: {
    fontSize: styleConstants.smallFont,
    color: styleConstants.primaryText,
  },
});

export default styles;
