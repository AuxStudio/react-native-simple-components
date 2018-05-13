import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  titleText: {
    fontSize: styleConstants.fonts.sizes.large,
    color: styleConstants.colors.primaryText,
    marginBottom: styleConstants.dimensions.margin.small,
  },
  descriptionText: {
    fontSize: styleConstants.fonts.sizes.regular,
    color: styleConstants.colors.secondaryText,
  },
});

export default styles;
