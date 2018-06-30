import React from 'react';
import { View, ScrollView, Text, Dimensions } from 'react-native';
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

const WINDOW = Dimensions.get('window');

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.setSelected = this.setSelected.bind(this);

    this.components = [
      {
        name: 'Button',
        component: Button,
        props: {
          iconName: 'search',
          text: 'Search',
        },
      },
      {
        name: 'ButtonIcon',
        component: ButtonIcon,
      },
      {
        name: 'CheckBox',
        component: CheckBox,
        props: {
          isChecked: true,
        },
      },
      {
        name: 'DeleteButton',
        component: DeleteButton,
      },
      {
        name: 'HeaderBar',
        component: HeaderBar,
        props: {
          leftIconName: 'chevron-left',
          text: 'Home',
          rightIconName: 'search',
        },
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
        props: {
          iconName: 'add',
        },
      },
      {
        name: 'Loader',
        component: Loader,
        props: {
          containerWidth: WINDOW.width - 20 - 20 - 20 - 20,
        },
      },
      {
        name: 'LoadingText',
        component: LoadingText,
      },
      {
        name: 'NotificationIcon',
        component: NotificationIcon,
        props: {
          count: 4,
        },
      },
      {
        name: 'RotatingChevron',
        component: RotatingChevron,
      },
      {
        name: 'SmartImage',
        component: SmartImage,
        props: {
          source: { uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg' },
          style: {
            width: 100,
            height: 100,
            borderRadius: 50,
          },
        },
      },
      {
        name: 'StarRating',
        component: StarRating,
        props: {
          rating: 4,
        },
      },
      {
        name: 'TabBar',
        component: TabBar,
        props: {
          tabs: [
            {
              title: 'Home',
              iconName: 'home',
            },
            {
              title: 'Profile',
              iconName: 'person',
            },
          ],
          activeTab: 'Home',
          showShadow: true,
        },
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
    let selectedComponentProps;

    this.components.forEach((component) => {
      if (component.name === selected) {
        SelectedComponent = component.component;
        selectedComponentProps = component.props;
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.demoContainer}>
          <SelectedComponent {...selectedComponentProps} />
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
