import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Photo from './Photo';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: styleConstants.white,
    },
    photosWrapper: {
        flex: 1,
        padding: 8,
    },
    photosContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 4,
        paddingBottom: 16,
    },
    photoContainer: {
        width: styleConstants.noteCardCell,
        height: styleConstants.noteCardCell,
        marginHorizontal: 4,
        marginBottom: 8,
    },
    photo: {
        width: styleConstants.noteCardCell,
        height: styleConstants.noteCardCell,
        borderWidth: 1,
        borderColor: styleConstants.lightGrey,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noteTextContainer: {
        flex: 1,
        marginRight: 8,
    },
    noteText: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primary,
    },
});

export default class PhotoList extends React.Component {
    constructor(props) {
        super(props);

        this.renderPhoto = this.renderPhoto.bind(this);
    }

    static get propTypes() {
        return {
            photos: PropTypes.array,
            handleViewPhotos: PropTypes.func,
            handleDelete: PropTypes.func,
        };
    }

    renderPhoto = ({ item, index }) => {
        return (
            <Photo
                key={'photo-' + item.uid}
                uri={item.cropped}
                isThumbnail
                photoContainerStyles={styles.photoContainer}
                photoStyles={styles.photo}
                errorText="Photo has been removed from device"
                handlePress={() => this.props.handleViewPhotos(index)}
                handleDeletePhoto={() => this.props.handleDelete(item)}
            />
        );
    };

    render() {
        const photos =
            this.props.photos && this.props.photos.length > 0 ? (
                <FlatList
                    keyExtractor={item => 'photo-' + item.uid}
                    data={this.props.photos}
                    renderItem={this.renderPhoto}
                    style={styles.photosWrapper}
                    contentContainerStyle={styles.photosContainer}
                />
            ) : (
                <View style={styles.photosWrapper}>
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

        return <View style={styles.container}>{photos}</View>;
    }
}
