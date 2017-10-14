import React from 'react';
import PropTypes from 'prop-types';
import { View, Modal, FlatList, Image, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Photo from './Photo';
import Touchable from './Touchable';

const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConstants.transBlack,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    photosWrapper: {},
    photosContainer: {},
    photoContainer: {},
    photo: {
        width: styleConstants.windowWidth,
        height: styleConstants.windowHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        padding: 16,
    },
    closeButton: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.white,
    },
});

export default class PhotoViewer extends React.Component {
    constructor(props) {
        super(props);

        this.getItemLayout = this.getItemLayout.bind(this);
        this.renderPhoto = this.renderPhoto.bind(this);
    }

    static get propTypes() {
        return {
            photos: PropTypes.array.isRequired,
            scrollToIndex: PropTypes.number,
            handleClose: PropTypes.func,
            handleDeletePhoto: PropTypes.func,
        };
    }

    componentDidMount() {
        // Hack to fix scrollToIndex
        setTimeout(() => {
            this.refs.photosList.scrollToIndex({
                index: this.props.scrollToIndex || 0,
                animated: false,
            });
        }, 0);
    }

    getItemLayout = (data, index) => ({
        length: styleConstants.windowWidth,
        offset: styleConstants.windowWidth * index,
        index,
    });

    renderPhoto = ({ item, index }) => {
        return (
            <Photo
                key={'photo-' + item.uid}
                uri={item.fullSize}
                photoContainerStyles={styles.photoContainer}
                photoStyles={styles.photo}
                errorText="Photo has either been removed from this device or moved to a different folder."
                handleDeletePhoto={() => {
                    this.props.handleClose();
                    this.props.handleDeletePhoto(item.uid);
                }}
            />
        );
    };

    render() {
        return (
            <View>
                <Modal
                    animationType={'fade'}
                    transparent={true}
                    visible={true}
                    onRequestClose={this.props.handleClose}>
                    <View style={styles.container}>
                        <FlatList
                            ref="photosList"
                            keyExtractor={item => 'photo-' + item.uid}
                            data={this.props.photos}
                            renderItem={this.renderPhoto}
                            getItemLayout={this.getItemLayout}
                            style={styles.photosWrapper}
                            contentContainerStyle={styles.photosContainer}
                            horizontal
                            pagingEnabled
                        />

                        <Touchable
                            onPress={this.props.handleClose}
                            style={styles.closeButtonContainer}>
                            <Icon name="close" style={styles.closeButton} />
                        </Touchable>
                    </View>
                </Modal>
            </View>
        );
    }
}
