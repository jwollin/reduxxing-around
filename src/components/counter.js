import React, { Fragment } from "react";
import { connect } from "react-redux";

function Counter (state, store) {
  console.log("STATE IS: ", state, "STORE IS: ", store);
  return (
    <Fragment>
      <button onClick={() => state.dispatch({ type: 'INCREMENT' })}>INCREMENT</button>
      <button onClick={() => state.dispatch({ type: 'DECREMENT' })}>DECREMENT</button>
      <div>{state.count}</div>
    </Fragment>
  )
}

export default connect()(Counter)