import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const SIZE = 20;

const styles = StyleSheet.create({
  container: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 0,
    backgroundColor: styleConstants.colors.dividerColor,
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.small,
    color: styleConstants.colors.primaryText,
  },
});

export default styles;
