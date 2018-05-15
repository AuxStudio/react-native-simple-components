import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
  },
});

export default styles;
