import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as waitingActions from '../store/modules/waiting';
import WaitingList from '../components/WaitingList';


export class WaitingListContainer extends Component {
    
    handleChange = e => {
        const { WatingActions } = this.props;
        WatingActions.changeInput(e.target.value);
    }

    handleSubmit = e => {
        e.preventDefault();
        const { WatingActions, input } = this.props;
        WatingActions.create(input);
        WatingActions.changeInput('');
    }

    handleEnter = id => {
        const { WatingActions } = this.props;
        WatingActions.enter(id);
    }

    handleLeave = id => {
        const { WatingActions } = this.props;
        WatingActions.leave(id);
    }    

    render() {
        const { input, list } = this.props;
        return (
            <WaitingList
                input = { input }
                waitingList = {list} 
                onChange = {this.handleChange}
                onEnter = {this.handleEnter} 
                onLeave = {this.handleLeave}
                onSubmit = {this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = ({waiting}) => ({
    input : waiting.input,
    list : waiting.list
});

const mapDispachToProps = dispatch => ({
    WatingActions : bindActionCreators(waitingActions,dispatch)
});

export default connect(
    mapStateToProps, 
    mapDispachToProps
)(WaitingListContainer)
