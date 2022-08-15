import React from "react";
import "./Card.css";

const Card = ({ item }) => {
  const {
    title,
    description,
    address,
    contact_email,
    contact_phone,
    eventDate,
    event_Start,
    event_End,
    event_organizer,
  } = item;
  const eventDateNew = new Date(eventDate).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const monthDate = eventDateNew.split(",");

  return (
    <div className="col-lg-4">
      <div className="card card-margin">
        <div className="card-header no-border">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="card-body pt-0">
          <div className="widget-49">
            <div className="widget-49-title-wrapper">
              <div className="widget-49-date-primary">
                <span className="widget-40-date-day date-day">
                  {monthDate[0].substring(0, 3)} <br /> {monthDate[1]}
                </span>
              </div>
              <div className="widget-49-meeting-info">
                <span className="widget-49-pro-title">{description}</span>
                <span className="widget-49-meeting-time">
                  {event_Start} to {event_End}
                </span>
              </div>
            </div>
            <div className="widget-49-meeting-points contact-info">
              <p>Address: {address}</p>
              <p>
                Contact Email:<b>{contact_email}</b>
              </p>
              <p>
                Contact Phone: <b>{contact_phone}</b>
              </p>
              <p>
                Organizer: <b>{event_organizer}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
