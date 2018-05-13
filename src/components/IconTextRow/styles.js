import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: styleConstants.colors.dividerColor,
    paddingVertical: styleConstants.dimensions.padding.large,
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
  },
  text: {
    flex: 1,
    fontSize: styleConstants.fonts.sizes.regular,
    color: styleConstants.colors.primaryText,
    textAlign: 'right',
  },
});

export default styles;
