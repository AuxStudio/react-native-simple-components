import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { AnimateHeight } from "react-native-simple-animators";

import styleConstants from "../assets/styleConstants";

import Touchable from "./Touchable";

const styles = StyleSheet.create({
    menuItemsWrapper: {
        ...styleConstants.regularShadow,
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: styleConstants.white,
    },
    menuItemsContainer: {},
    menuItemContainer: {
        justifyContent: "center",
        padding: 8,
    },
    menuItemText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.black,
        textAlign: "right",
    },
    separator: {
        alignSelf: "stretch",
        height: 1,
        backgroundColor: styleConstants.lightGrey,
    },
});

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);

        this.itemHeight = 41;
    }

    static get propTypes() {
        return {
            values: PropTypes.array.isRequired,
            handleSelect: PropTypes.func.isRequired,
            minWidth: PropTypes.number, // default is 160
            showSeparatorLine: PropTypes.bool,

            // style: PropTypes.node, // set position here (defaults to top right corner)
            // textStyle: PropTypes.node,
            // separatorColor: PropTypes.string,
        };
    }

    renderItem({ item }) {
        return (
            <Touchable
                style={styles.menuItemContainer}
                onPress={() => this.props.handleSelect(item)}>
                <Text style={[styles.menuItemText, this.props.textStyle]}>
                    {item}
                </Text>
            </Touchable>
        );
    }

    render() {
        const minWidthStyles = {
            minWidth: this.props.minWidth ? this.props.minWidth : 160,
        };

        const separatorColorStyles = this.props.separatorColor && {
            backgroundColor: this.props.separatorColor,
        };

        return (
            <View
                style={[
                    styles.menuItemsWrapper,
                    this.props.style,
                    minWidthStyles,
                ]}>
                <AnimateHeight
                    initialValue={0}
                    finalValue={this.props.values.length * this.itemHeight}
                    shouldAnimateIn>
                    <FlatList
                        keyExtractor={item => "menu" + item}
                        data={this.props.values}
                        renderItem={this.renderItem}
                        contentContainerStyle={styles.menuItemsContainer}
                        ItemSeparatorComponent={
                            this.props.showSeparatorLine ? (
                                () => (
                                    <View
                                        style={[
                                            styles.separator,
                                            separatorColorStyles,
                                        ]}
                                    />
                                )
                            ) : null
                        }
                    />
                </AnimateHeight>
            </View>
        );
    }
}
