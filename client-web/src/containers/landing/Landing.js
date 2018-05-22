import React, { Component } from "react";
import { connect } from "react-redux";
import { windowResize } from "../../store/actions/windowActions";
//
import CityPreviews from "../../components/previews/city/CityPreviews";
import EventPreviews from "../../components/previews/event/EventPreviews";
//
import { CityData } from "../../data/LandingPageData";
class Landing extends Component {
  retrieveCityData = () => {
    this.setState({
      cityData: CityData
    });
  };
  UNSAFE_componentWillMount() {
    this.retrieveCityData();
  }

  render() {
    return (
      <div className="container">
        <CityPreviews cityData={this.state.cityData} />
        <EventPreviews />
      </div>
    );
  }
}

export default connect(null, { windowResize })(Landing);
