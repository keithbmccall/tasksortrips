import React, { Component } from "react";
import { connect } from "react-redux";
//
import * as actions from "../../store/actions/index";
//

class Explore extends Component {
  UNSAFE_componentWillMount() {
    this.props.searchByCity(this.props.match.params.city);
  }
  render() {
    return <div>explore after search after clicking throught cities</div>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchByCity: city => dispatch(actions.searchByCity(city))
  };
};
export default connect(null, mapDispatchToProps)(Explore);
