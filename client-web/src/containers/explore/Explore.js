import React, { Component } from "react";
import { connect } from "react-redux";

class Explore extends Component {
  UNSAFE_componentWillMount() {
      //
  }
  render() {
    return <div>explore after search after clicking throught cities</div>;
  }
}

export default connect(null)(Explore);
