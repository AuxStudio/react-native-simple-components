import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  scrollWrapper: {
    maxHeight: 56,
  },
  scrollContainer: {
    height: 56,
  },
  container: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  iconContainer: {
    paddingHorizontal: 16,
    position: 'relative',
  },
  icon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.secondaryText,
  },
  text: {
    fontSize: styleConstants.smallFont,
    color: styleConstants.secondaryText,
    marginTop: 2,
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.33,
  },
});

export default styles;
