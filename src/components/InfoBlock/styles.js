import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  infoContainer: {
    alignSelf: 'stretch',
  },
  infoTextTitle: {
    fontSize: styleConstants.largeFont,
    color: styleConstants.primaryText,
  },
  infoTextDescription: {
    marginTop: 8,
    fontSize: styleConstants.regularFont,
    color: styleConstants.secondaryText,
  },
});

export default styles;
