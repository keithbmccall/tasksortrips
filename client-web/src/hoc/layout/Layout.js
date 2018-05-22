import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../../store/actions/index";
//
import NavBar from "../../components/navigation/navbar/NavBar";
//

class Layout extends Component {
  componentDidMount() {
    this.props.windowResize();
    window.addEventListener("resize", this.props.windowResize);
  }
  render() {
    return (
      <Fragment>
        <NavBar
          isLoggedIn={this.props.isLoggedIn}
          isSmallScreen={this.props.isSmallScreen}
        />
        {this.props.children}
      </Fragment>
    );
  }
}
Layout.propTypes = {
  isSmallScreen: PropTypes.bool.isRequired
};
const mapStateToProps = state => {
  return {
    isSmallScreen: state.window.windowWidth < 700
    // isLoggedIn: state.auth.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    windowResize: () => dispatch(actions.windowResize())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
