import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const SIZE = 32;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderWidth: 1,
    borderColor: styleConstants.colors.primaryText,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
  },
});

export default styles;
