import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  starContainer: {
    flex: 1,
  },
  star: {
    marginBottom: 8,
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: styleConstants.smallFont,
    color: styleConstants.primaryText,
    ...styleConstants.primaryFont,
    textAlign: 'center',
  },
});

export default styles;
