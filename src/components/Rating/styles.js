import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    backgroundColor: styleConstants.transBlack,
    borderRadius: 8,
    overflow: 'hidden',
  },
  starContainer: {
    marginHorizontal: 4,
  },
});

export default styles;
