import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {},
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.white,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.secondaryText,
  },
});

export default styles;
