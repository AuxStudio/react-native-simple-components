import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  menuItemsWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: styleConstants.primary,
    zIndex: 100,
  },
  menuItemsContainer: {},
  menuItemContainer: {
    justifyContent: 'center',
    padding: 8,
  },
  menuItemText: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
    textAlign: 'right',
  },
  separator: {
    alignSelf: 'stretch',
    height: 1,
    backgroundColor: styleConstants.dividerColor,
  },
});

export default styles;
