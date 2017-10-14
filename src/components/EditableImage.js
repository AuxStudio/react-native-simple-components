import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';

import Icon from '../assets/icons/index';
import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';

const styles = StyleSheet.create({
    imageContainer: {
        alignItems: 'center',
        marginTop: 32,
        position: 'relative',
        width: 100,
        height: 100,
        alignSelf: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editImageContainer: {
        position: 'absolute',
        top: 0,
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: styleConstants.white,
    },
    editImageIcon: {
        fontSize: styleConstants.largeFont,
        color: styleConstants.white,
    },
});

export default class EditableImage extends React.Component {
    constructor(props) {
        super(props);

        this.toggleEditMode = this.toggleEditMode.bind(this);

        this.state = {
            isEditable: true,
        };
    }

    static get propTypes() {
        return {
            uri: PropTypes.string,
            handlePress: PropTypes.func,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.uri && this.props.uri !== prevProps.uri) {
            this.setState({
                isEditable: false,
            });
        }
    }

    toggleEditMode() {
        this.setState({
            isEditable: true,
        });
    }

    render() {
        const image = this.props.uri ? (
            <Image source={{ uri: this.props.uri }} style={styles.image} />
        ) : null;

        const editImageContainerStyles = this.state.isEditable && {
            backgroundColor: styleConstants.transPrimary,
        };

        const editIcon = this.state.isEditable && (
            <Icon name="camera" style={styles.editImageIcon} />
        );

        return (
            <View style={styles.imageContainer}>
                {image}

                <Touchable
                    onPress={
                        this.state.isEditable ? (
                            this.props.handlePress
                        ) : (
                            this.toggleEditMode
                        )
                    }
                    style={[
                        styles.editImageContainer,
                        editImageContainerStyles,
                    ]}>
                    {editIcon}
                </Touchable>
            </View>
        );
    }
}
