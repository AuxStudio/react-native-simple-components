import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    elevation: 100,
    backgroundColor: styleConstants.colors.white,
  },
  row: {
    paddingHorizontal: styleConstants.dimensions.padding.small,
    alignItems: 'center',
  },
  text: {
    fontSize: styleConstants.fonts.sizes.regular,
    color: styleConstants.colors.primaryText,
    textAlign: 'left',
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
    marginRight: styleConstants.dimensions.padding.small,
  },
});

export default styles;
