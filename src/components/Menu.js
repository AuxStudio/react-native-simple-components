import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, Text, StyleSheet } from "react-native";

import styleConstants from "../assets/styleConstants";

import { AnimateHeight } from "react-native-simple-animators";
import Touchable from "./Touchable";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.renderItem = this.renderItem.bind(this);
    }

    static get propTypes() {
        return {
            values: PropTypes.array.isRequired,
            handleSelect: PropTypes.func.isRequired,
            minWidth: PropTypes.number, // default is 160
            showSeparatorLine: PropTypes.bool,
            itemHeight: PropTypes.number, // used to calculate final menu height

            showShadow: PropTypes.bool,
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

        const shadowStyles = this.props.showShadow && {
            ...styleConstants.largeShadow,
        };

        const separatorsHeight = this.props.showSeparator
            ? this.props.values.length - 1
            : 0;

        const finalHeight =
            this.props.values.length *
                (this.props.itemHeight ? this.props.itemHeight : 40) +
            separatorsHeight;

        return (
            <View
                style={[
                    styles.menuItemsWrapper,
                    minWidthStyles,
                    shadowStyles,
                    this.props.style,
                ]}>
                <AnimateHeight
                    initialValue={0}
                    finalValue={finalHeight}
                    shouldAnimateIn>
                    <FlatList
                        keyExtractor={item => "menu" + item}
                        data={this.props.values}
                        renderItem={this.renderItem}
                        contentContainerStyle={styles.menuItemsContainer}
                        ItemSeparatorComponent={
                            this.props.showSeparatorLine
                                ? () => (
                                      <View
                                          style={[
                                              styles.separator,
                                              separatorColorStyles,
                                          ]}
                                      />
                                  )
                                : null
                        }
                    />
                </AnimateHeight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItemsWrapper: {
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: styleConstants.primary,
        zIndex: 100,
    },
    menuItemsContainer: {},
    menuItemContainer: {
        justifyContent: "center",
        padding: 8,
    },
    menuItemText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primaryText,
        textAlign: "right",
    },
    separator: {
        alignSelf: "stretch",
        height: 1,
        backgroundColor: styleConstants.dividerColor,
    },
});
