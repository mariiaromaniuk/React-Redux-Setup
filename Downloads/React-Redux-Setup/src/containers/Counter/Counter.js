import React, { Component } from 'react';
// 'react-redux' feature that returns igher-order function
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// Subscription
// listening on state change, will be executed whenever the state is updated
// store.subscribe(() => {
//     console.log('[Subscription]', store.getState());
// });

// Defines how the state managed by Redux should be mapped to props you can use in 
// this component (Counter) - because you can't change the state within the component
// ctr(create new prop on the props): state.counter(copy prop from the reducer.js)
const mapStateToProps = state => {
    return {
        // state.ctr.counter -> ctr the name we gave our global var in index.js rootReducer
        // when map the imported reducers to separate sections of the app
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
};

// Which actions do we want to dispatch(execute the action)
// You can't dispatch actions that you're not handeling in the reducer
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
        onAddCounter: () => dispatch({type: actionTypes.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: actionTypes.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: actionTypes.DELETE_RESULT, resultElId: id})
    }
};

// connect is a special func that returns another function which sequentially
// will be executed with param ..(Counter). It connects Counter to:
// 1. mapStateToProps - which slice of state we're interested in
// 2. mapDispatchToProps - which actions do we want to dispatch 
// if we need just one argument: connect(null, mapDispatchToProps)(Counter)
export default connect(mapStateToProps, mapDispatchToProps)(Counter);