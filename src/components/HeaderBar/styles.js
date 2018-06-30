import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  wrapper: {
    alignSelf: 'stretch',
  },
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: styleConstants.dimensions.padding.large,
    backgroundColor: styleConstants.colors.dividerColor,
  },
  leftIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftIcon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
  },
  textContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: styleConstants.fonts.sizes.regular,
    color: styleConstants.colors.primaryText,
    textAlign: 'center',
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightIcon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.primaryText,
  },
});

export default styles;
