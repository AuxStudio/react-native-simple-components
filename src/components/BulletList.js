import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import DeleteButton from './DeleteButton';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleConstants.white,
    },
    notesWrapper: {
        flex: 1,
        padding: 8,
        borderRadius: 4,
    },
    notesContainer: {
        paddingBottom: 16,
        borderRadius: 4,
    },
    noteContainer: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    bulletContainer: {
        marginRight: 8,
        top: 8,
        alignSelf: 'flex-start',
    },
    bullet: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: styleConstants.lightGrey,
    },
    noteTextContainer: {
        flex: 1,
        marginRight: 8,
    },
    noteText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primary,
    },
    deleteButtonContainer: {
        top: 4,
    },
});

export default class BulletList extends React.Component {
    constructor(props) {
        super(props);

        this.renderBullet = this.renderBullet.bind(this);
    }

    static get propTypes() {
        return {
            values: PropTypes.array.isRequired,
            handleDelete: PropTypes.func.isRequired,
        };
    }

    renderBullet = ({ item }) => {
        return (
            <View style={styles.noteContainer}>
                <View style={styles.bulletContainer}>
                    <View style={styles.bullet} />
                </View>
                <View style={styles.noteTextContainer}>
                    <Text style={[styles.noteText, styleConstants.primaryFont]}>
                        {item.title}
                    </Text>
                </View>
                <View style={styles.deleteButtonContainer}>
                    <DeleteButton
                        handlePress={() => this.props.handleDelete(item)}
                    />
                </View>
            </View>
        );
    };

    render() {
        const bullets =
            this.props.values && this.props.values.length > 0 ? (
                <FlatList
                    keyExtractor={item => 'bullet-' + item.uid}
                    data={this.props.values}
                    renderItem={this.renderBullet}
                    style={styles.notesWrapper}
                    contentContainerStyle={styles.notesContainer}
                />
            ) : (
                <View style={styles.notesWrapper}>
                    <View style={styles.noteTextContainer}>
                        <Text
                            style={[
                                styles.noteText,
                                styleConstants.primaryFont,
                            ]}>
                            None
                        </Text>
                    </View>
                </View>
            );

        return <View style={styles.container}>{bullets}</View>;
    }
}
