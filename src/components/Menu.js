import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';
import AnimateHeight from '../animators/AnimateHeight';
import AnimateTranslateX from '../animators/AnimateTranslateX';

const styles = StyleSheet.create({
    menuItemsWrapper: {
        ...styleConstants.regularShadow,
        position: 'absolute',
        top: 66,
        right: 16,
        width: 164,
        backgroundColor: styleConstants.white,
    },
    menuItemsContainer: {},
    menuItemContainer: {
        justifyContent: 'center',
        padding: 8,
    },
    menuItemText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primary,
        textAlign: 'right',
    },
    separator: {
        width: 164 - 16,
        alignSelf: 'center',
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
        };
    }

    renderItem({ item }) {
        return (
            <Touchable
                style={styles.menuItemContainer}
                onPress={() => this.props.handleSelect(item)}>
                <Text style={[styles.menuItemText, styleConstants.primaryFont]}>
                    {item}
                </Text>
            </Touchable>
        );
    }

    render() {
        return (
            <View style={styles.menuItemsWrapper}>
                <AnimateTranslateX
                    initialValue={164}
                    finalValue={0}
                    shouldAnimateIn>
                    <AnimateHeight
                        initialValue={0}
                        finalValue={this.props.values.length * this.itemHeight}
                        shouldAnimateIn>
                        <FlatList
                            keyExtractor={item => 'menu' + item}
                            data={this.props.values}
                            renderItem={this.renderItem}
                            contentContainerStyle={styles.menuItemsContainer}
                            ItemSeparatorComponent={() => (
                                <View style={styles.separator} />
                            )}
                        />
                    </AnimateHeight>
                </AnimateTranslateX>
            </View>
        );
    }
}
