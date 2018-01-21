import React from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

import styleConstants from "../assets/styleConstants";

import { Touchable, IconTextRow } from "react-native-simple-components";
import { AnimateTranslateY } from "react-native-simple-animators";

export default class ActionSheet extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            shouldAnimateOut: false,
        };
    }

    static get propTypes() {
        return {
            options: PropTypes.array,
            handlePress: PropTypes.func,
            rowHeight: PropTypes.func, // needed for animation
            textStyle: PropTypes.any,
            iconStyle: PropTypes.any,
            rowStyle: PropTypes.any,
            style: PropTypes.any,
        };
    }

    handleSelect(item) {
        this.setState({
            shouldAnimateOut: true,
        });
        setTimeout(() => {
            this.props.handlePress && this.props.handlePress(item);
        }, 500);
    }

    render() {
        const ROW_HEIGHT = this.props.rowHeight ? this.props.rowHeight : 56;

        return (
            <AnimateTranslateY
                initialValue={(this.props.options.length + 1) * ROW_HEIGHT}
                finalValue={0}
                shouldAnimateIn={!this.state.shouldAnimateOut}
                shouldAnimateOut={this.state.shouldAnimateOut}
                style={[styles.container, this.props.style]}>
                {this.props.options.map(item => {
                    return (
                        <Touchable
                            onPress={() => this.handleSelect(item.text)}
                            style={styles.row}
                            key={item.text}>
                            <IconTextRow
                                iconName={item.iconName}
                                iconStyle={[styles.icon, this.props.iconStyle]}
                                text={item.text}
                                textStyle={[styles.text, this.props.textStyle]}
                                style={[styles.row, { height: ROW_HEIGHT }]}
                            />
                        </Touchable>
                    );
                })}
                <Touchable
                    onPress={() => this.handleSelect("Cancel")}
                    style={styles.row}>
                    <IconTextRow
                        iconName="cancel"
                        iconStyle={[styles.icon, this.props.iconStyle]}
                        text="Cancel"
                        textStyle={[styles.text, this.props.textStyle]}
                        style={styles.row}
                    />
                </Touchable>
            </AnimateTranslateY>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        elevation: 100,
        backgroundColor: styleConstants.white,
    },
    row: {
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderBottomColor: styleConstants.dividerColor,
        alignItems: "center",
    },
    text: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.primaryText,
        ...styleConstants.primaryFont,
        textAlign: "left",
    },
    icon: {
        fontSize: styleConstants.iconFont,
        color: styleConstants.secondaryText,
        marginRight: 8,
    },
});
