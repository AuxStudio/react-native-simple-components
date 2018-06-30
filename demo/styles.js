import { StyleSheet, Platform } from 'react-native';

const PADDING = 20;
const BORDER_RADIUS = 5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 24 : 0, // clear the status bar
    padding: PADDING,
    paddingBottom: 0, // scroll container
  },
  demoContainer: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS,
    marginBottom: PADDING,
  },

  scrollContainer: {
    flex: 1, // fill the remaining space
  },
  scrollContentContainer: {
    paddingBottom: PADDING,
  },

  titleText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: PADDING,
  },

  buttonContainer: {
    marginBottom: PADDING / 2,
  },
});

export default styles;
