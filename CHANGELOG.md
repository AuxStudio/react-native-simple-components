# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## Unreleased (2.0.0)

### Fixed

* Correct use of propTypes in all components
* Button - iconRight and textLeft at the same time
* ButtonIcon - removed overflow: 'hidden' style prop to allow showShadow on iOS

### Changed

* CountIcon renamed to NotificationIcon
* StatusBarComponent renamed to StatusBar
* HeaderBar left and right components no longer render containers when passed custom components
* ImageWidget renamed to SmartImage

### Added

* Touchable - disabled prop
* Button - androidRippleBorderless prop
* ButtonIcon - androidRipple set of props
* CheckBox - androidRipple set of props
* CheckBox - customIcon prop
* DeleteButton - customIcon, showShadow and androidRipple set of props
* HeaderBar - androidRipple set of props
* IconTextRow - customIcon, handlePress and androidRipple set of props
* SmartImage - offline and error states
* InfoBlock - style prop

### Removed

* TouchableIcon
* TouchableText
* Button - disabledStyle prop
* ButtonIcon - disabledStyle prop
* CountIcon - handlePress prop

## < 2.0.0

Not documented.
