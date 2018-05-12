import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  button: {
    backgroundColor: styleConstants.dividerColor,
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  icon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
  },
  disabled: {
    opacity: 0.33,
  },
});

export default styles;
