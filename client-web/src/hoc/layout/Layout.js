import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { windowResize } from "../../store/actions/windowActions";
//
import NavBar from "../../components/navigation/navbar/NavBar";

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

const mapStateToProps = state => {
  console.log(state);
  return {
    isSmallScreen: state.window.windowWidth < 700
    // isLoggedIn: state.auth.token !== null
  };
};

export default connect(mapStateToProps, { windowResize })(Layout);
