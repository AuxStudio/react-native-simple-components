import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.colors.dividerColor,
    paddingVertical: styleConstants.dimensions.padding.small / 2,
    paddingHorizontal: styleConstants.dimensions.padding.small,
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
    marginRight: styleConstants.dimensions.margin.small,
  },
  text: {
    fontSize: styleConstants.fonts.sizes.small,
    color: styleConstants.colors.primaryText,
  },
});

export default styles;
