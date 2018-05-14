import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: styleConstants.colors.dividerColor,
    borderRadius: 16,
    overflow: 'hidden', // ios
  },
  text: {
    fontSize: styleConstants.fonts.sizes.regular,
    color: 'transparent',
  },
});

export default styles;
