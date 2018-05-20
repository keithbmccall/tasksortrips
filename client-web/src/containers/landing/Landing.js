import React, { Component } from "react";
import { connect } from "react-redux";
import { windowResize } from "../../store/actions/windowActions";
//
class Landing extends Component {
    
  render() {
    return <div>ladning</div>;
  }
}






export default connect(null, { windowResize })(Landing);
