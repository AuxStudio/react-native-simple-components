# react-native-simple-components

A collection of simple, customisable reusable react-native components with a decent amount of functionality out of the box.

`Important: A number of components have been removed from the V2 release in favour of better supported external libraries. Please see the CHANGELOG for further changes.`

## Installation

```shell
npm install --save react-native-simple-components
```

react-native-vector-icons is a dependency. You will need to set it up as per the following link (unless you plan to pass in custom icon components):
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#installation)

## Importing

```js
import { HeaderBar } from 'react-native-simple-components';
```

## Usage

See the source code for props.
NOTE: Pass in Material icon names where applicable.
ANOTHER NOTE: These components were created with the thought that the component's container should control a component's layout.

```js
import React from 'react';
import { View } from 'react-native';
import { HeaderBar } from 'react-native-simple-components';

class Home extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderBar
                    showShadow
                    statusBarStyle='light-content' // or dark-content
                    statusBarColor='rgba(0,0,0,0.67)'

                    leftIconName='menu'
                    leftComponent={null} // pass in custom component
                    handleLeftIconPress={/* some function */}
                    leftIconStyle={null}

                    textComponent={null} // pass in custom component
                    text='Eazy Peezy'
                    textLeft={false} // align text to the left (useful if you don't want a left icon)
                    textRight={false} // align text to the right (useful if you don't want a right icon)
                    handleTextPress={/* some function */)}
                    textStyle={null} // style fonts here

                    rightComponent={null} // pass in custom component
                    rightIconName='search'
                    handleRightIconPress={/* some function */}
                    rightIconStyle={null}

                    style={null} // set backgroundColor, height etc here
                />
            </View>
        )
    }
}
```

## Components

* [x] ActionSheet - A JS action sheet that accepts text and iconName options.
* [x] Button - A button that accepts text and an optional icon.
* [x] ButtonIcon - A round button that contains an icon.
* [x] CheckBox - A nice and simple checkbox component.
* [x] DeleteButton - A small close button (used internally).
* [x] HeaderBar - A header component that accepts status bar styles, text and left and right icons.
* [x] IconTextRow - A row with icon and text justified with space-between
* [x] InfoBlock - A common title and description patterned component.
* [x] Label - An icon and text label component.
* [x] Loader - A thin line loader that animates left to right in a loop.
* [x] LoadingText - An animating loading component that represents a data fetch on text.
* [x] NotificationIcon - A small notification type icon that contains a count value.
* [x] Page - A component that acts as a page wrapper for your scenes. Has a few helper props.
* [x] RotatingChevron - A rotating chevron.
* [x] SmartImage - An image component that displays an ActivityIndicator while fetching images or a offline icon if offline or an error icon if error
* [x] StarRating - Renders a row of outlined or filled stars based on rating prop. Will pass back the pressed rating.
* [x] StatusBar - Android and iOS friendly status bar (used internally).
* [x] TabBar - A tab bar that accepts icons and label text.
* [x] Touchable - A touchable component that renders the android ripple effect if specified and if on an Android device (used internally).

## TODOS

* Add example project (npmignore it)
* Add development guide
* Add storybook (npm ignore it)
* HeaderBar/Custom components should not have containers
* All Touchables have long press and disableFeedback props
* Add static displayName

## ENHANCEMENTS

* Tooltip component
* Follow material design
  -- Update iOS shadows
