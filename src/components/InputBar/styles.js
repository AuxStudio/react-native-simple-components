import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    paddingHorizontal: 16,
    backgroundColor: styleConstants.primary,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
  },
  inputContainer: {
    alignSelf: 'stretch',
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 8,
  },
  input: {
    color: styleConstants.primaryText,
    borderBottomWidth: 0,
  },
  rightIconContainer: {
    justifyContent: 'center',
  },
  text: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
  },
});

export default styles;
