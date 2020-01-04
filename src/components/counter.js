import React, { Fragment } from "react";
import { connect } from "react-redux";

function Counter (state) {
  console.log('STATE: ', state)
  return (
    <Fragment>

    </Fragment>
  )
}

export default connect()(Counter)