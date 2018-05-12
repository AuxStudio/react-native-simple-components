import { StyleSheet, Platform } from 'react-native';

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
    paddingHorizontal: 16,
    backgroundColor: styleConstants.primary,
  },
  leftIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  leftIcon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
  },
  textContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
    textAlign: 'center',
  },
  rightIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightIcon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
  },
});

export default styles;
