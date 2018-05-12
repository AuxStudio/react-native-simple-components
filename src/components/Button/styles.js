import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: styleConstants.dividerColor,
  },
  textLeftContainer: {
    justifyContent: 'flex-start',
  },
  disabled: {
    opacity: 0.33,
  },
  icon: {
    position: 'absolute',
    left: 16,
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
  },
  iconRight: {
    left: 'auto',
    right: 16,
  },
  textLeftIcon: {
    position: 'relative',
    left: 0,
    marginRight: 8,
  },
  text: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
  },
});

export default styles;
