import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: styleConstants.dividerColor,
    paddingVertical: 16,
  },
  iconContainer: {},
  icon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
    textAlign: 'right',
  },
});

export default styles;
