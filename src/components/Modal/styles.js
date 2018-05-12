import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.transBlack,
  },
  container: {},
  closeIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  closeIconButton: {
    padding: 16,
  },
  closeIcon: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primary,
  },
});

export default styles;
