import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import styleConstants from '../assets/styleConstants';

import Touchable from './Touchable';

const styles = StyleSheet.create({
    container: {},
    titleContainer: {
        paddingVertical: 8,
    },
    title: {
        fontSize: styleConstants.smallFont,
        color: styleConstants.lightGrey,
    },
    radioButtonsContainer: {
        marginTop: 8,
        flexDirection: 'row',
    },
    radioButtonContainer: {
        flex: 1,
        alignItems: 'center',
    },
    radioButton: {
        ...styleConstants.smallShadow,
        backgroundColor: styleConstants.white,
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: styleConstants.lightGrey,
        justifyContent: 'center',
        alignItems: 'center',
    },
    radioButtonInner: {
        ...styleConstants.smallShadow,
        backgroundColor: styleConstants.white,
        width: 8,
        height: 8,
        borderRadius: 4,
        padding: 4,
    },
    labelContainer: {
        paddingVertical: 8,
    },
    label: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.lightGrey,
    },
});

export default class RadioSelect extends React.Component {
    constructor(props) {
        super(props);

        this.select = this.select.bind(this);
        this.setActive = this.setActive.bind(this);

        this.state = {
            active: null,
        };
    }

    static get propTypes() {
        return {
            displayText: PropTypes.string,
            currentValue: PropTypes.string,
            values: PropTypes.array,
            handleSelect: PropTypes.func,
        };
    }

    componentDidMount() {
        if (this.props.currentValue) {
            this.setActive(this.props.currentValue);
        }
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.currentValue &&
            this.props.currentValue !== prevProps.currentValue &&
            this.props.currentValue !== this.state.active
        ) {
            this.setActive(this.props.currentValue);
        }
    }

    select(value) {
        this.setActive(value);
        this.props.handleSelect(value);
    }

    setActive(value) {
        this.setState({
            active: value,
        });
    }

    render() {
        const activeTitleStyles = this.state.active && {
            color: styleConstants.secondary,
        };

        const radioButtons = this.props.values.map(value => {
            const activeRadioButtonStyles = this.state.active ===
                value.title && {
                borderColor: styleConstants.white,
            };

            const activeRadioButtonInnerStyles = this.state.active ===
                value.title && {
                backgroundColor: styleConstants.secondary,
            };

            const activeLabelStyles = this.state.active === value.title && {
                color: styleConstants.white,
            };

            return (
                <Touchable
                    key={'radio-' + value.title}
                    style={styles.radioButtonContainer}
                    onPress={() => this.select(value.title)}>
                    <View style={[styles.radioButton, activeRadioButtonStyles]}>
                        <View
                            style={[
                                styles.radioButtonInner,
                                activeRadioButtonInnerStyles,
                            ]}
                        />
                    </View>
                    <View style={styles.labelContainer}>
                        <Text
                            style={[
                                styles.label,
                                styleConstants.primaryFont,
                                activeLabelStyles,
                            ]}>
                            {value.title}
                        </Text>
                    </View>
                </Touchable>
            );
        });

        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text
                        style={[
                            styles.title,
                            activeTitleStyles,
                            styleConstants.primaryFont,
                        ]}>
                        {this.props.displayText}
                    </Text>
                </View>
                <View style={styles.radioButtonsContainer}>{radioButtons}</View>
            </View>
        );
    }
}
