import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const SIZE = 20;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: styleConstants.colors.dividerColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: styleConstants.fonts.sizes.verySmall,
    color: styleConstants.colors.primaryText,
  },
});

export default styles;
