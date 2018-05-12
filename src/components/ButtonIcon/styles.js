import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const SIZE = 56;

const styles = StyleSheet.create({
  button: {
    backgroundColor: styleConstants.colors.dividerColor,
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
  },
});

export default styles;
