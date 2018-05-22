import React, { Fragment } from "react";
import classes from "./CityPreviews.module.css";
//
const CityPreviews = props => {
  const renderCityPromos = (city, key) => {
    //   return <CityPromo city={city} key={key}/>
    const columnType = key > 2 ? "col-sm-6" : "col-md-4";
    return (
      <div className={[columnType, classes.PreviewHolder].join(" ")}>
        <div
          key={key}
          className={["col-md-12 rounded", classes.CitySquare].join(" ")}
          style={{
            background: `url(${city.pic})`
          }}
        >
          <div className={["d-flex justify-content-center align-items-center text-center h-100 w-100", classes.Overlay].join(' ')}>
            <div>
              <h1>{city.city}</h1>
              <small>{city.tagline.toUpperCase()}</small>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const cityPromos = props.cityData.map(renderCityPromos);
  return (
    <div className="container-fluid">
      CityPreviews
      <div className={["row mh-100 "].join(" ")}>{cityPromos}</div>
    </div>
  );
};

export default CityPreviews;
