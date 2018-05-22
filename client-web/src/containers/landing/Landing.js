import React, { Component } from "react";
import { connect } from "react-redux";
import { windowResize } from "../../store/actions/windowActions";
//
import CityPreviews from "../../components/previews/city/CityPreviews";
import EventPreviews from "../../components/previews/event/EventPreviews";
//
import { CityData, EventData } from "../../data/LandingPageData";
class Landing extends Component {
  retrieveCityData = () => {
    this.setState({
      cityData: CityData
    });
  };
  retrieveEventData = () => {
    this.setState({
      eventData: EventData
    });
  };
  UNSAFE_componentWillMount() {
    this.retrieveCityData();
    this.retrieveEventData();
  }

  render() {
    return (
      <div className="container mt-4">
        <CityPreviews cityData={this.state.cityData} />
        <EventPreviews eventData={this.state.eventData} />
      </div>
    );
  }
}

export default connect(null, { windowResize })(Landing);
