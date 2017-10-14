import React from "react";
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
} from "react-native";
import { connect } from 'react-redux';

import SnackBarComponent from './SnackBarComponent';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    }
});

export class SnackBar extends React.Component {
    constructor(props) {
        super(props);

        this.resetError = this.resetError.bind(this);
        this.retryAction = this.retryAction.bind(this);
    }

    static get propTypes() {
        return {
            error: PropTypes.object,
            retryAction: PropTypes.object,
        };
    }

    resetError() {
        this.props.dispatch({
            type: 'RESET_ERROR',
        });
    }

    retryAction() {
        this.props.dispatch({
            type: 'TOGGLE_LOADING'
        });

        this.resetError();

        const retryActionData = this.props.retryAction.data && this.props.retryAction.data;

        this.props.dispatch({
            type: this.props.retryAction.type,
            ...retryActionData,
        });
    }

    render() {

        // If we have an error/success
        // Not cloud data success
        const snackBar = this.props.error.type && !(this.props.error.type === 'CLOUD_DATA' && this.props.error.success) &&
            <SnackBarComponent
                text={this.props.error.message}
                success={this.props.error.success}
                handleReset={this.resetError}
                handleRetryAction={this.props.retryAction.type && this.retryAction} />

        return (
            <View style={styles.container}>
                {snackBar}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        error: state.main.appState.error,
        retryAction: state.main.appState.retryAction,
    }
}

export default connect(mapStateToProps)(SnackBar);