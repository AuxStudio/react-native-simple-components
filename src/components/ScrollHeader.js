import React from "react";
import {
    View,
    ScrollView,
    Animated,
    Image,
    StyleSheet,
    Platform,
} from "react-native";
import PropTypes from "prop-types";

import styleConstants from "../assets/styleConstants";

import { HeaderBar, TabBar } from "react-native-simple-components";

export default class ScrollHeader extends React.Component {
    constructor(props) {
        super(props);

        this.convertHexToRGB = this.convertHexToRGB.bind(this);
        this.getTabBarLayout = this.getTabBarLayout.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
        this.handleTabPress = this.handleTabPress.bind(this);

        this.state = {
            minHeaderHeight: null,
            scrollY: new Animated.Value(0),
            tabBarY: null,
        };
    }

    static get propTypes() {
        return {
            showShadows: PropTypes.bool, // will apply shadows to header and tabBar (if not supplying tabBarWrapperComponent - otherwise just apply shadow there) appropriately
            maxHeaderHeight: PropTypes.number.isRequired, // header and image only
            minHeaderHeight: PropTypes.number.isRequired, // as above

            // Image
            imageURL: PropTypes.oneOfType([
                PropTypes.number, // local
                PropTypes.string, // remote
            ]),

            // HeaderBar
            statusBarColor: PropTypes.string,
            statusBarStyle: PropTypes.string,
            finalHeaderBackgroundColor: PropTypes.string, // rgb or hex
            headerLeftIconName: PropTypes.string,
            //headerLeftIconStyle: PropTypes.node,
            handleHeaderLeftIconPress: PropTypes.func,
            headerText: PropTypes.string,
            //headerTextStyle: PropTypes.node,
            textLeft: PropTypes.bool,
            handleHeaderTextPress: PropTypes.func,
            headerRightIconName: PropTypes.string,
            //headerRightIconStyle: PropTypes.node,
            handleHeaderRightIconPress: PropTypes.func,
            //headerStyle: PropTypes.node,

            // TabBar
            tabs: PropTypes.array.isRequired,
            activeTab: PropTypes.string,
            handleTabPress: PropTypes.func.isRequired,
            tabBarBackgroundColor: PropTypes.string,
            tabBarTextColor: PropTypes.string,
            tabBarActiveTextColor: PropTypes.string,
            //tabBarTabStyle: PropTypes.node,
            //tabBarActiveTabStyle: PropTypes.node,
            //tabBarTextStyle: PropTypes.node,
            //tabBarStyle: PropTypes.node,

            // ScrollView
            //bodyWrapperStyle: PropTypes.node,
            //bodyContainerStyle: PropTypes.node,
            tabBarWrapperComponent: PropTypes.func, // in case you need to wrap children before and tabbar in a view
            childrenBeforeTabBar: PropTypes.node, // optional
            childrenAfterTabBar: PropTypes.node,
        };
    }

    componentWillMount() {
        // Set the min header height dependent on Platform
        let minHeaderHeight = this.props.minHeaderHeight;
        minHeaderHeight += Platform.OS === "ios" ? 24 : 0; // status bar height

        // Convert the finalHeaderBackgroundColor to RGB
        let finalHeaderBackgroundColor = this.convertHexToRGB(
            this.props.finalHeaderBackgroundColor
        );

        this.setState({
            minHeaderHeight,
            finalHeaderBackgroundColor,
        });
    }

    componentDidMount() {
        setTimeout(() => {
            this.getTabBarLayout;
        }, 0);
    }

    convertHexToRGB(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result
            ? {
                  r: parseInt(result[1], 16),
                  g: parseInt(result[2], 16),
                  b: parseInt(result[3], 16),
              }
            : null;
    }

    getTabBarLayout(event) {
        // Only do it once initially
        if (!this.state.tabBarY) {
            const tabBarY = event.nativeEvent.layout.y;
            this.setState({
                tabBarY,
            });
        }
    }

    handleTabPress(tab) {
        const scrollPosition =
            this.props.maxHeaderHeight -
            this.state.minHeaderHeight +
            this.state.tabBarY;
        this.scrollTo(scrollPosition);

        this.props.handleTabPress(tab);
    }

    scrollTo(value) {
        // Set timeout is necessary
        setTimeout(() => {
            this.refs.scrollView.scrollTo({ x: 0, y: value, animated: true });
        }, 0);
    }

    render() {
        const imageURL =
            typeof this.props.imageURL === "number"
                ? this.props.imageURL
                : { uri: this.props.imageURL };

        const headerScrollDistance =
            this.props.maxHeaderHeight - this.state.minHeaderHeight;

        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, headerScrollDistance],
            outputRange: [
                this.props.maxHeaderHeight,
                this.state.minHeaderHeight,
            ],
            extrapolate: "clamp",
        });

        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, headerScrollDistance / 2, headerScrollDistance],
            outputRange: [1, 1, 0],
            extrapolate: "clamp",
        });

        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, headerScrollDistance],
            outputRange: [0, this.props.maxHeaderHeight / -4],
            extrapolate: "clamp",
        });

        const textOpacity = this.state.scrollY.interpolate({
            inputRange: [
                headerScrollDistance + (this.state.minHeaderHeight - 16), // clear heading title
                headerScrollDistance + (this.state.minHeaderHeight - 8), // add extra for fadeIn
            ],
            outputRange: [0, 1],
            extrapolate: "clamp",
        });

        const tabBarOpacity = this.state.scrollY.interpolate({
            inputRange: [
                headerScrollDistance + this.state.tabBarY, // clear heading title // TODO: needs testing on different devices
                headerScrollDistance + this.state.tabBarY,
            ],
            outputRange: [0, 1],
            extrapolate: "clamp",
        });

        const backgroundColor = this.state.scrollY.interpolate({
            inputRange: [0, headerScrollDistance],
            outputRange: [
                `rgba(${this.state.finalHeaderBackgroundColor.r}, ${this.state
                    .finalHeaderBackgroundColor.g}, ${this.state
                    .finalHeaderBackgroundColor.b}, 0)`,
                `rgba(${this.state.finalHeaderBackgroundColor.r}, ${this.state
                    .finalHeaderBackgroundColor.g}, ${this.state
                    .finalHeaderBackgroundColor.b}, ${(headerScrollDistance / 2,
                headerScrollDistance)})`,
            ],
            extrapolate: "clamp",
        });

        const headerTextComponent = (
            <View style={styles.headerTextContainer}>
                <Animated.Text
                    style={[styles.headerText, { opacity: textOpacity }]}
                    numberOfLines={1}>
                    {this.props.headerText}
                </Animated.Text>
            </View>
        );

        const shadowStyles = this.props.showShadows && {
            ...styleConstants.largeShadow,
        };

        const BlankWrapper = props => {
            return <View style={shadowStyles}>{props.children}</View>;
        };

        const Wrapper = this.props.tabBarWrapperComponent
            ? this.props.tabBarWrapperComponent
            : // No wrapper case
              BlankWrapper;

        return (
            <View style={styles.container}>
                <Animated.View
                    style={[
                        styles.headerContainer,
                        { height: headerHeight, backgroundColor },
                    ]}>
                    <Animated.Image
                        source={imageURL}
                        style={[
                            styles.coverPhoto,
                            {
                                height: this.props.maxHeaderHeight,
                                opacity: imageOpacity,
                                transform: [{ translateY: imageTranslate }],
                            },
                        ]}
                    />
                    <HeaderBar
                        statusBarColor={this.props.statusBarColor}
                        statusBarStyle={this.props.statusBarStyle}
                        leftIconName={this.props.headerLeftIconName}
                        handleLeftIconPress={
                            this.props.handleHeaderLeftIconPress
                        }
                        leftIconStyle={this.props.headerLeftIconStyle}
                        rightIconName={this.props.headerRightIconName}
                        handleRightIconPress={
                            this.props.handleHeaderRightIconPress
                        }
                        rightIconStyle={this.props.headerRightIconStyle}
                        style={this.props.headerStyle}
                        textComponent={headerTextComponent}
                        textLeft={this.props.textLeft}
                    />
                </Animated.View>
                <Animated.View
                    style={[
                        shadowStyles,
                        styles.fauxTabBarContainer,
                        {
                            top: this.state.minHeaderHeight,
                            opacity: tabBarOpacity,
                        },
                    ]}>
                    <TabBar
                        backgroundColor={this.props.tabBarBackgroundColor}
                        textColor={this.props.tabBarTextColor}
                        activeTextColor={this.props.tabBarActiveTextColor}
                        tabs={this.props.tabs}
                        activeTab={this.props.activeTab}
                        tabStyle={this.props.tabBarTabStyle}
                        activeTabStyle={this.props.tabBarActiveTabStyle}
                        handleTabPress={this.handleTabPress}
                        textStyle={this.props.tabBarTextStyle}
                        style={this.props.tabBarStyle}
                    />
                </Animated.View>
                <ScrollView
                    ref="scrollView"
                    style={[styles.bodyWrapper, this.props.bodyWrapperStyle]}
                    contentContainerStyle={[
                        styles.bodyContainer,
                        this.props.bodyContainerStyle,
                        {
                            marginTop: this.props.maxHeaderHeight,
                            paddingBottom: this.props.maxHeaderHeight,
                        },
                    ]}
                    scrollEventThrottle={16}
                    onScroll={Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: { y: this.state.scrollY },
                            },
                        },
                    ])}>
                    <Wrapper>
                        {this.props.childrenBeforeTabBar}
                        <View onLayout={this.getTabBarLayout}>
                            <TabBar
                                backgroundColor={
                                    this.props.tabBarBackgroundColor
                                }
                                textColor={this.props.tabBarTextColor}
                                activeTextColor={
                                    this.props.tabBarActiveTextColor
                                }
                                tabs={this.props.tabs}
                                activeTab={this.props.activeTab}
                                tabStyle={this.props.tabBarTabStyle}
                                activeTabStyle={this.props.tabBarActiveTabStyle}
                                handleTabPress={this.handleTabPress}
                                textStyle={this.props.tabBarTextStyle}
                                style={this.props.tabBarStyle}
                            />
                        </View>
                    </Wrapper>
                    {this.props.childrenAfterTabBar}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "stretch",
    },
    headerContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        overflow: "hidden",
        justifyContent: "space-between",
    },
    headerTextContainer: {
        flex: 3, // make the text container 3 times as big as the icon containers
        justifyContent: "center",
    },
    headerText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.white,
        ...styleConstants.primaryFont,
    },
    coverPhoto: {
        position: "absolute",
        top: 0,
        width: styleConstants.windowWidth,
        resizeMode: "cover",
    },
    fauxTabBarContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: styleConstants.primary,
    },
    bodyWrapper: {
        flex: 1,
        alignSelf: "stretch",
    },
    bodyContainer: {
        backgroundColor: styleConstants.white,
    },
});
