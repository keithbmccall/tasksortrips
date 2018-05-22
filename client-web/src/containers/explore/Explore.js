import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
const mapStateToProps = state => {
  return {
    city: state.cityEvents.city,
    events: state.cityEvents.events
  };
};
Explore.propTypes = {
  city: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(Explore);
