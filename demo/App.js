import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import {
  Button,
  ButtonIcon,
  CheckBox,
  DeleteButton,
  HeaderBar,
  IconTextRow,
  InfoBlock,
  Label,
  Loader,
  LoadingText,
  NotificationIcon,
  RotatingChevron,
  SmartImage,
  StarRating,
  TabBar,
} from 'react-native-simple-components';

import styles from './styles';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.setSelected = this.setSelected.bind(this);

    this.components = [
      {
        name: 'Button',
        component: Button,
      },
      {
        name: 'ButtonIcon',
        component: ButtonIcon,
      },
      {
        name: 'CheckBox',
        component: CheckBox,
      },
      {
        name: 'DeleteButton',
        component: DeleteButton,
      },
      {
        name: 'HeaderBar',
        component: HeaderBar,
      },
      {
        name: 'IconTextRow',
        component: IconTextRow,
      },
      {
        name: 'InfoBlock',
        component: InfoBlock,
      },
      {
        name: 'Label',
        component: Label,
      },
      {
        name: 'Loader',
        component: Loader,
      },
      {
        name: 'LoadingText',
        component: LoadingText,
      },
      {
        name: 'NotificationIcon',
        component: NotificationIcon,
      },
      {
        name: 'RotatingChevron',
        component: RotatingChevron,
      },
      {
        name: 'SmartImage',
        component: SmartImage,
      },
      {
        name: 'StarRating',
        component: StarRating,
      },
      {
        name: 'TabBar',
        component: TabBar,
      },
    ];

    this.state = {
      selected: this.components[0].name,
    };
  }

  setSelected(selected) {
    this.setState({
      selected,
    });
  }

  render() {
    const { selected } = this.state;
    let SelectedComponent;

    this.components.forEach((component) => {
      if (component.name === selected) {
        SelectedComponent = component.component;
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.demoContainer}>
          <SelectedComponent />
        </View>
        <Text style={styles.titleText}>Select a component</Text>
        <ScrollView
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContentContainer}
        >
          {this.components.map((component) => {
            return (
              <View key={component.name} style={styles.buttonContainer}>
                <Button
                  text={component.name}
                  handlePress={() => this.setSelected(component.name)}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
