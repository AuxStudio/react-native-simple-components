import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  inputWrapper: {
    alignSelf: 'stretch',
  },
  inputLabelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputLabelText: {
    fontSize: styleConstants.smallFont,
    color: styleConstants.secondaryText,
  },
  input: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
    paddingLeft: 0,
    paddingRight: 32,
    borderBottomWidth: 1,
    borderBottomColor: styleConstants.dividerColor,
  },

  clearTextButtonContainer: {
    position: 'absolute',
    bottom: 4,
    right: 0,
    padding: 8,
  },

  togglePasswordContainer: {
    paddingRight: 8,
  },
  togglePasswordText: {
    fontSize: styleConstants.smallFont,
    color: styleConstants.secondaryText,
  },

  characterCountContainer: {
    paddingRight: 8,
  },
  characterCountText: {
    fontSize: styleConstants.smallFont,
    color: styleConstants.secondaryText,
  },

  placeholderTextContainer: {
    position: 'absolute',
    bottom: 4,
    left: 0,
  },
  placeholderText: {
    fontSize: 14,
    color: styleConstants.secondaryText,
  },
});

export default styles;
