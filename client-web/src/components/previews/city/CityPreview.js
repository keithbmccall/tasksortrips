import React from "react";
import { Link } from "react-router-dom";
import classes from "./CityPreview.module.css";
//
const CityPreview = props => {
  const { city, index } = props;
  const columnType = index < 2 ? "col-sm-6" : "col-md-4";
  //
  return (
    <div className={[columnType, classes.PreviewHolder].join(" ")}>
      <Link to={`/explore/${city.city.split(" ").join("-")}`}>
        <div
          className={["col-md-12 rounded w-100", classes.CitySquare].join(" ")}
          style={{
            background: `url(${city.pic})`
          }}
        >
          <div
            className={[
              "d-flex justify-content-center align-items-center text-center h-100 w-100",
              classes.Overlay
            ].join(" ")}
          >
            <div>
              <h1>{city.city}</h1>
              <small>{city.tagline.toUpperCase()}</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default CityPreview;
