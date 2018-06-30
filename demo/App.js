import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-simple-components';

import styles from './styles';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View />
      </View>
    );
  }
}
