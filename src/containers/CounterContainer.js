import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as counterActions from '../store/modules/counter';
import Counter from '../components/Counter';




export class CounterContainer extends Component {
    handleIncrement = () => {
        const { CounterActions } = this.props;
        CounterActions.increment();
    };

    handleDecrement = () => {
        const { CounterActions } = this.props;
        CounterActions.decrement();
    };

    render() {
        const { color, number } = this.props;
        return (
            <Counter
                color={color} 
                value={number}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
            />
        );
    }
}

const mapStateToProps = ({ counter }) => ({
    color : counter.color,
    number : counter.number,
});

const mapDispatchToProps = dispatch => ({
    CounterActions : bindActionCreators(counterActions,dispatch)
})


export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(CounterContainer);