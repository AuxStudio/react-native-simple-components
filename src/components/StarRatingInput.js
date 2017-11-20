import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import styleConstants from "../assets/styleConstants";

import { AnimateScale, AnimateOpacity } from "react-native-simple-animators";
import { Touchable } from "react-native-simple-components";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class StarRating extends React.Component {
    constructor(props) {
        super(props);

        this.handlePress = this.handlePress.bind(this);
        this.setAnimateIndex = this.setAnimateIndex.bind(this);

        this.state = {
            animateIndex: null,
        };
    }

    static get propTypes() {
        return {
            rating: PropTypes.number,
            handlePress: PropTypes.func,
            labelTextValues: PropTypes.array, // if supplied, will render labels
            shouldAnimate: PropTypes.bool, // scale animation on press

            // style: PropTypes.node,
            // iconStyle: PropTypes.node,
            // iconContainerStyle: PropTypes.node,
            // labelTextStyle: PropTypes.node,
            // labelTextContainerStyle: PropTypes.node,
        };
    }

    static defaultProps = {
        labelTextValues: ["Bad", "Below Average", "Ok", "Good", "Great"],
    };

    handlePress(rating) {
        this.props.shouldAnimate && this.setAnimateIndex(rating - 1);

        this.props.handlePress && this.props.handlePress(rating);
    }

    setAnimateIndex(animateIndex) {
        this.setState({
            animateIndex,
        });
    }

    render() {
        const maxStars = 5;
        const starsArray = [];
        for (let i = 0; i < maxStars; i++) {
            if (i < this.props.rating) {
                starsArray.push(
                    <Icon
                        name="star"
                        size={styleConstants.smallFont}
                        color={styleConstants.white}
                        style={this.props.iconStyle}
                    />
                );
            } else {
                starsArray.push(
                    <Icon
                        name="star-border"
                        size={styleConstants.smallFont}
                        color={styleConstants.white}
                        style={this.props.iconStyle}
                    />
                );
            }
        }

        return (
            <View style={[styles.container, this.props.style]}>
                {starsArray.map((item, index) => {
                    const text = this.props.labelTextValues &&
                        this.props.rating === index + 1 && (
                            <AnimateOpacity
                                initialValue={0}
                                finalValue={1}
                                shouldAnimateIn
                                style={[
                                    styles.textContainer,
                                    this.props.labelTextContainerStyle,
                                ]}>
                                <Text
                                    style={[
                                        styles.text,
                                        this.props.labelTextStyle,
                                    ]}>
                                    {this.props.labelTextValues[index]}
                                </Text>
                            </AnimateOpacity>
                        );

                    return (
                        <View
                            key={"star-" + index}
                            style={styles.starContainer}>
                            <Touchable
                                onPress={() => this.handlePress(index + 1)}
                                style={[
                                    styles.star,
                                    this.props.iconContainerStyle,
                                ]}>
                                <AnimateScale
                                    initialValue={1}
                                    finalValue={1.25}
                                    shouldAnimateIn={
                                        index === this.state.animateIndex
                                    }
                                    animateInCallBack={this.setAnimateIndex}
                                    shouldAnimateOut={
                                        index !== this.state.animateIndex
                                    }>
                                    {item}
                                </AnimateScale>
                            </Touchable>
                            {text}
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    starContainer: {
        flex: 1,
    },
    star: {
        marginBottom: 8,
    },
    textContainer: {
        alignItems: "center",
    },
    text: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.primaryText,
        ...styleConstants.primaryFont,
        textAlign: "center",
    },
});
