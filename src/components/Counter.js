import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

import utilities from '../utilities';
import styleConstants from '../assets/styleConstants';

const styles = StyleSheet.create({
    container: {},
    text: {
        fontSize: styleConstants.regularFont,
        color: styleConstants.transPrimary,
    },
});

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.startTimer = this.startTimer.bind(this);
        this.clearTimer = this.clearTimer.bind(this);

        this.timer = null;

        this.state = {
            duration: 0,
            isCounting: false,
        };
    }

    static get propTypes() {
        return {
            displayDuration: PropTypes.number, // to display initially - can be null
            totalDuration: PropTypes.number, // total to count to - can be null
            startTimer: PropTypes.bool,
        };
    }

    componentDidMount() {
        if (this.props.startTimer) {
            this.startTimer();
        }
    }

    componentDidUpdate(prevProps) {
        // 0/Pause => Play
        if (
            this.props.startTimer &&
            this.props.startTimer !== prevProps.startTimer
        ) {
            this.startTimer();
        } else if (
            this.props.pauseTimer &&
            this.props.pauseTimer !== prevProps.pauseTimer
        ) {
            // Play => Pause
            this.clearTimer();
        } else if (
            !this.props.startTimer &&
            this.props.startTimer !== prevProps.startTimer
        ) {
            // Stopped
            this.clearTimer();

            this.setState({
                isCounting: false,
                duration: 0,
            });
        }
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    startTimer() {
        this.setState({
            isCounting: true,
        });

        this.timer = setInterval(() => {
            if (
                this.props.totalDuration &&
                this.state.duration < this.props.totalDuration
            ) {
                this.setState({
                    duration: (this.state.duration += 1),
                });
            } else if (this.props.totalDuration) {
                // We've hit our total count
                this.clearTimer();

                this.setState({
                    isCounting: false,
                    duration: 0,
                });
            } else {
                // No total to count to
                this.setState({
                    duration: (this.state.duration += 1),
                });
            }
        }, 1000);
    }

    clearTimer() {
        clearInterval(this.timer);
    }

    render() {
        const duration = this.state.isCounting
            ? Math.round(this.state.duration)
            : this.props.displayDuration
              ? Math.round(this.props.displayDuration)
              : 0;
        const durationText = utilities.getPrettyMinutesFromSeconds(duration);

        return (
            <View style={styles.container}>
                <Text style={[styles.text, styleConstants.primaryFont]}>
                    {durationText}
                </Text>
            </View>
        );
    }
}
