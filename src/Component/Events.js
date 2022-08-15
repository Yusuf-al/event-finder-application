import React, { useEffect } from "react";
import Card from "./Card/Card";
import { getEvents } from "./../actions/eventAction";
import { useSelector, useDispatch } from "react-redux";

const Events = () => {
  const { isLoading, getEventsList, error } = useSelector((state) => {
    return state.events;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <div className="container">
      <h1 className="my-3 text-center">All Events</h1>

      {isLoading && <p className="text-center">Loading.....</p>}
      {error && <h3>Something Went Wrong</h3>}
      {!isLoading && getEventsList.length === 0 && <h3>No Event is Listed</h3>}

      <div className="row">
        {getEventsList.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Events;

// { event: { events, isLoading }, getEvents }
// connect(mapStateToProps, { getEvents })

// useEffect(() => {
//   fetch("http://localhost:5000/events")
//     .then((res) => res.json())
//     .then((data) => {
//       setEventList(data);
//     });
// }, []);

// useEffect(() => {
//   fetch("http://localhost:5000/users")
//     .then((res) => res.json())
//     .then((data) => {
//       setUsers(data);
//       // console.log(data);
//     });
// }, []);

// const mapStateToProps = (state) => ({
//   event: state.events,
// });
