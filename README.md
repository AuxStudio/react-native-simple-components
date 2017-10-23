# react-native-simple-components

A collection of simple, customisable reusable react-native components with a decent amount of functionality out of the box.

## Installation

```shell
npm install --save react-native-simple-animators
```

react-native-vector-icons is a dependency. You will need to set it up as per the following link (unless you plan to pass in custom icon components):
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#installation)

## Importing

```js
import { HeaderBar } from 'react-native-simple-components'; // ES6
```

## Usage

```js
import React from 'react';
import { View } from 'react-native';
import { HeaderBar } from 'react-native-simple-components';

class BannerText extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <HeaderBar />
            </View>
        )
    }
}

```

## Components

See the source code for props.
NOTE: Pass in Material icon names where applicable.

- [x] Loader            -   A thin line loader that animates left to right in a loop.
- [x] Snackbar          -   A snack bar that animates from the bottom and includes a icon, message, retry action and close button.
- [x] Button            -   A button that accepts text and an optional icon.
- [x] ButtonIcon        -   A round button that contains an icon.  
- [x] CountIcon         -   A small notification type icon that contains a count value.
- [x] DeleteButton      -   A small close button (used internally).
- [x] HeaderBar         -   A header component that accepts status bar styles, text and left and right icons.
- [x] InfoBlock         -   A common title and description patterned component.
- [x] Input             -   A text input component with all the bells and whistles.
- [x] InputBar          -   A combination of the Input and HeaderBar components that can be used as a search/chat input bar.
- [x] InputContainer    -   An input wrapper component that avoids the keyboard and provides blur on touch support.
- [x] Label             -   An icon and text label component.
- [x] LoadingText       -   An animating loading component that represents a data fetch on text.
- [x] Menu              -   A menu that animates in height.
- [x] Modal             -   A modal that offers a dark transparent background and close icon out of the box.
- [x] Page              -   A component that acts as a page wrapper (useful for passing in custom width and heights to your pages during responsive testing).
- [x] TabBar            -   A tab bar that accepts icons and label text.
- [x] Touchable         -   A touchable component that renders the android ripple effect if specified and if on an Android device (used internally).