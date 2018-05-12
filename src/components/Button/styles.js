import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    padding: styleConstants.dimensions.padding.large,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.colors.dividerColor,
  },
  textLeftContainer: {
    justifyContent: 'flex-start',
  },
  iconContainer: {
    position: 'absolute',
    left: styleConstants.dimensions.padding.large,
  },
  iconRight: {
    left: 'auto',
    right: styleConstants.dimensions.padding.large,
  },
  textLeftIcon: {
    position: 'relative',
    left: 0,
    marginRight: styleConstants.dimensions.padding.small,
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
  },
  text: {
    fontSize: styleConstants.fonts.sizes.regular,
    color: styleConstants.colors.primaryText,
  },
});

export default styles;
