import React from "react";
//
import classes from "./EventPreview.module.css";

const EventPreviews = props => {
  const renderEventPromos = (event, key) => {
    return (
      <div className={["col-sm-6", classes.PreviewHolder].join(" ")}>
        <div
          className={["rounded", classes.EventSquare].join(" ")}
          style={{ background: `url(${event.pic})` }}
        ><div
        className={[
          "d-flex justify-content-center align-items-center text-center h-100 w-100",
          classes.Overlay
        ].join(" ")}
      >
          <div>
          <small>{event.description.toUpperCase()}</small>
            <h2>{event.name.charAt(0).toUpperCase() + event.name.slice(1)}</h2>
            


          </div></div>
        </div>
      </div>
    );
  };

  const eventPromos = props.eventData.map(renderEventPromos);

  return (
    <div className="container-fluid mt-4">
      <h4>Discover New Adventures</h4>
      <div className="row">{eventPromos}</div>
    </div>
  );
};

export default EventPreviews;
