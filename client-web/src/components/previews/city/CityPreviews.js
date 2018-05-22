import React from "react";
import classes from "./CityPreview.module.css";
//
import CityPreview from "./CityPreview";
//
const CityPreviews = props => {
  const renderCityPromos = (city, key) => {
    //   return <CityPromo city={city} key={key}/>
    const index = key;
    return <CityPreview city={city} key={key} index={index} />;
  };

  const cityPromos = props.cityData.map(renderCityPromos);
  return (
    <div className="container-fluid mt-4">
      <h4>Explore World Capitals</h4>
      <div className="row">{cityPromos}</div>
    </div>
  );
};

export default CityPreviews;
