import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const HEIGHT = 56;

const styles = StyleSheet.create({
  scrollWrapper: {
    maxHeight: HEIGHT,
  },
  scrollContainer: {
    height: HEIGHT,
  },
  container: {
    height: HEIGHT,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: styleConstants.colors.white,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  iconContainer: {
    paddingHorizontal: styleConstants.dimensions.padding.large,
    position: 'relative',
  },
  icon: {
    fontSize: styleConstants.fonts.sizes.icon,
    color: styleConstants.colors.secondaryText,
  },
  text: {
    fontSize: styleConstants.fonts.sizes.small,
    color: styleConstants.colors.secondaryText,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.33,
  },
});

export default styles;
