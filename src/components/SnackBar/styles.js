import { StyleSheet } from 'react-native';

import styleConstants from '../../styleConstants';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  messageWrapper: {
    position: 'absolute',
    bottom: 0,
    width: styleConstants.windowWidth,
    backgroundColor: '#323232',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 100, // android elevation fix
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageTextContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageText: {
    flex: 1,
    fontSize: styleConstants.regularFont,
    color: styleConstants.primaryText,
    marginRight: 32,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  actionButtonText: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.secondaryText,
  },
  iconContainer: {
    marginRight: 8,
    marginTop: 2,
  },
  icon: {
    fontSize: styleConstants.iconFont,
    color: styleConstants.primaryText,
  },
  closeIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  closeIcon: {
    fontSize: styleConstants.regularFont,
    color: styleConstants.dividerColor,
  },
});

export default styles;
