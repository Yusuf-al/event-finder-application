import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEvent } from "../../actions/eventAction";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EventForm = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organizer, setOrganizer] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    const data = {
      title,
      date,
      desc,
      address,
      start,
      end,
      email,
      phone,
      organizer,
    };
    if (
      data.title.trim() === "" ||
      data.address.trim() === "" ||
      data.desc.trim() === "" ||
      data.start.trim() === "" ||
      data.end.trim() === "" ||
      data.email.trim() === "" ||
      data.phone.trim() === "" ||
      data.organizer.trim() === "" ||
      data.date.trim() === ""
    ) {
      return toast.warning("Please fill out all fileds carefully");
    }

    const checkDate = new Date(data.date).toLocaleDateString("en-CA");
    const today = new Date().toLocaleDateString("en-CA");

    if (today > checkDate) {
      return toast.error("Invalid Date ! Please Check");
    }

    dispatch(addEvent(data));
    navigate("/");
    toast.success("Event Added Successfully");
    data.title = "";
    data.address = "";
    data.desc = "";
    data.start = "";
    data.end = "";
    data.email = "";
    data.phone = "";
    data.organizer = "";
    data.date = "";
  };
  return (
    <div className="col-lg-5 col-sm-12 col-md-9 mx-auto">
      <form className="my-5  p-3 card card-margin" onSubmit={handleSubmitEvent}>
        <h1 className="text-center p-2">Add An Event</h1>
        <div className="row mb-2">
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="form6Example1">
                Event Name
              </label>
              <input
                type="text"
                value={title}
                id="form6Example1"
                className="form-control"
                name="eventName"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form6Example3">
            Event Organizer
          </label>
          <input
            type="text"
            id="form6Example3"
            value={organizer}
            className="form-control"
            name="eventOrg"
            onChange={(e) => setOrganizer(e.target.value)}
          />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form6Example4">
            Address
          </label>
          <textarea
            className="form-control"
            id="form6Example7"
            rows="2"
            value={address}
            name="eventAddress"
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form6Example5">
            Contact Email
          </label>
          <input
            type="email"
            id="form6Example5"
            className="form-control"
            name="eventEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form6Example6">
            Phone
          </label>
          <input
            type="number"
            id="form6Example6"
            className="form-control"
            name="eventPhone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form6Example6">
            Event Data
          </label>
          <input
            type="date"
            id="form6Example6"
            className="form-control"
            name="eventDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form6Example6">
            Event Timig
          </label>
          <div className="d-flex align-middle">
            <input
              type="text"
              id="form6Example6"
              className="form-control"
              placeholder="start"
              name="eventStart"
              value={start}
              onChange={(e) => setStart(e.target.value)}
            />
            <p className="mx-2">to</p>
            <input
              type="text"
              id="form6Example6"
              className="form-control"
              placeholder="End"
              name="eventEnd"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
            />
          </div>
        </div>

        <div className="form-outline mb-2">
          <label className="form-label" htmlFor="form6Example7">
            Description
          </label>
          <textarea
            className="form-control"
            id="form6Example7"
            rows="4"
            name="eventDesc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-2 mt-2">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default EventForm;
