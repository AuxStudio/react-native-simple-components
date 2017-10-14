import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, StyleSheet, ActivityIndicator } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';
import DeleteButton from './DeleteButton';
import Button from './Button';

const styles = StyleSheet.create({
    photoLoadingContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: styleConstants.realWhite,
        justifyContent: 'center',
        borderRadius: 8,
    },
    photoErrorIcon: {
        color: styleConstants.danger,
    },
    photoErrorIconSmall: {
        fontSize: styleConstants.smallFont,
        marginBottom: 4,
    },
    photoErrorIconLarge: {
        fontSize: styleConstants.largeFont,
        marginBottom: 16,
    },
    photoErrorText: {
        textAlign: 'center',
    },
    photoErrorTextSmall: {
        color: styleConstants.primary,
        fontSize: styleConstants.verySmallFont,
        paddingHorizontal: 4,
    },
    photoErrorTextLarge: {
        color: styleConstants.white,
        fontSize: styleConstants.regularFont,
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    deleteButtonContainerSmall: {
        position: 'absolute',
        top: 4,
        right: 4,
    },
    deleteButtonContainerLarge: {},
});

export default class Photo extends React.Component {
    constructor(props) {
        super(props);

        this.setLoadingTrue = this.setLoadingTrue.bind(this);
        this.setLoadingFalse = this.setLoadingFalse.bind(this);
        this.toggleLoadError = this.toggleLoadError.bind(this);

        this.state = {
            loading: true,
            loadError: false,
        };
    }

    static get PropTypes() {
        return {
            uri: PropTypes.string.isRequired,
            isThumbnail: PropTypes.bool, // will render smaller error text, icon and deleteButton (if applicable)
            photoContainerStyles: PropTypes.object, // used for photo and error
            photoStyles: PropTypes.object, // used for photo and error
            errorText: PropTypes.string, // if load error, it will display this text
            handlePress: PropTypes.func, // if provided, the thumbnail will be pressable
            deleteOnErrorOnly: PropTypes.bool, // if true, only provide delete button if there was an error loading
            handleDeletePhoto: PropTypes.func, // if provided, delete button will be provided
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.uri && this.props.uri !== prevProps.uri) {
            this.setLoadingTrue();
        }
    }

    setLoadingTrue() {
        this.setState({
            loading: true,
        });
    }

    setLoadingFalse() {
        this.setState({
            loading: false,
        });
    }

    toggleLoadError() {
        this.setState({
            loadError: !this.state.loadError,
        });
    }

    render() {
        const photoLoadingComponent = this.state.loading && (
            <View style={styles.photoLoadingContainer}>
                <ActivityIndicator
                    size="small"
                    color={styleConstants.primary}
                />
            </View>
        );

        const photoErrorIconStyles = this.props.isThumbnail
            ? [styles.photoErrorIcon, styles.photoErrorIconSmall]
            : [styles.photoErrorIcon, styles.photoErrorIconLarge];

        const photoErrorTextStyles = this.props.isThumbnail
            ? [styles.photoErrorText, styles.photoErrorTextSmall]
            : [styles.photoErrorText, styles.photoErrorTextLarge];

        const deleteButton = this.props.handleDeletePhoto ? this.props
            .isThumbnail ? (
            <View style={styles.deleteButtonContainerSmall}>
                <DeleteButton handlePress={this.props.handleDeletePhoto} />
            </View>
        ) : (
            <View style={styles.deleteButtonContainerLarge}>
                <Button
                    text="Delete Photo Reference"
                    iconName="camera"
                    backgroundColor="transparent"
                    androidRipple
                    androidRippleColor={styleConstants.primary}
                    handlePress={this.props.handleDeletePhoto}
                />
            </View>
        ) : null;

        const image = (
            <Image
                source={{ uri: this.props.uri }}
                onLoadEnd={this.setLoadingFalse}
                onError={this.toggleLoadError}
                style={this.props.photoStyles}
            />
        );

        const photo =
            // Load failed
            this.state.loadError ? this.props.isThumbail ? (
                <Touchable
                    onPress={this.props.handlePress}
                    style={this.props.photoContainerStyles}>
                    <View style={this.props.photoStyles}>
                        <Icon name="error" style={photoErrorIconStyles} />
                        <Text
                            style={[
                                photoErrorTextStyles,
                                styleConstants.primaryFont,
                            ]}>
                            {this.props.errorText}
                        </Text>
                    </View>
                    {deleteButton}
                </Touchable>
            ) : (
                <View style={this.props.photoContainerStyles}>
                    <View style={this.props.photoStyles}>
                        <Icon name="error" style={photoErrorIconStyles} />
                        <Text
                            style={[
                                photoErrorTextStyles,
                                styleConstants.primaryFont,
                            ]}>
                            {this.props.errorText}
                        </Text>
                        {deleteButton}
                    </View>
                </View>
            ) : // Load succeeded
            this.props.isThumbnail ? this.props.handlePress ? (
                <Touchable
                    onPress={this.props.handlePress}
                    style={this.props.photoContainerStyles}>
                    {image}
                    {!this.props.deleteOnErrorOnly && deleteButton}
                    {photoLoadingComponent}
                </Touchable>
            ) : (
                <View style={this.props.photoContainerStyles}>
                    {image}
                    {!this.props.deleteOnErrorOnly && deleteButton}
                    {photoLoadingComponent}
                </View>
            ) : (
                <View style={this.props.photoContainerStyles}>
                    {image}
                    {photoLoadingComponent}
                </View>
            );

        return photo;
    }
}
