import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    overflow: 'hidden',
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    flex: 3, // make the text container 3 times as big as the icon containers
    justifyContent: 'center',
  },
  headerText: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
  },
  coverPhoto: {
    position: 'absolute',
    top: 0,
    width: styleConstants.windowWidth,
    resizeMode: 'cover',
  },
  fauxTabBarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: styleConstants.primary,
  },
  bodyWrapper: {
    flex: 1,
    alignSelf: 'stretch',
  },
  bodyContainer: {
    backgroundColor: styleConstants.white,
  },
});

export default styles;
