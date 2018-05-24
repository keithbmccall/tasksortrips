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
    return <div className="container-fluid mt-4">
    
    <div>
    <h4>{this.props.city.split('-').join(' ')} Events</h4>

      <div></div>
    </div>
    
    
    
    
    </div>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    searchByCity: city => dispatch(actions.searchByCity(city))
  };
};
const mapStateToProps = state => {
  console.log(state.cityEvents.events)
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
