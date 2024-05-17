import React from "react";
import "./events.css";
import Card from "./Card";
const Events = () => {
  return (
    <>
      <div className="container_events">
        <section>
          <article> Suvidha Events</article>
          <p className="event_text">
            Our Charity Events: Celebrating Our Impact Together
          </p>
        </section>
        <div className="card_container">
          <Card />
        </div>
      </div>
    </>
  );
};

export default Events;
