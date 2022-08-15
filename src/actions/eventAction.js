import {
  GET_EVENTS,
  SET_LOADING,
  ERRORS,
  ADD_EVENTS,
  SEARCH_EVENTS,
} from "./types";
import axios from "axios";

export const getEvents = () => async (dispatch) => {
  try {
    // setLoading();
    dispatch({
      type: SET_LOADING,
    });
    const res = await axios.get("https://eventfinderproject.herokuapp.com/");
    dispatch({
      type: GET_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: error.message,
    });
  }
};
export const addEvent = (eventData) => async (dispatch) => {
  try {
    // setLoading();
    dispatch({
      type: SET_LOADING,
    });
    const res = await axios.post("https://eventfinderproject.herokuapp.com/", {
      title: eventData.title,
      description: eventData.desc,
      eventDate: eventData.date,
      address: eventData.address,
      event_Start: eventData.start,
      event_End: eventData.end,
      contact_email: eventData.email,
      contact_phone: eventData.phone,
      event_organizer: eventData.organizer,
    });

    dispatch({
      type: ADD_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: error.message,
    });
  }
};

export const searchEvents = (text) => async (dispatch) => {
  try {
    setLoading();

    const res = await axios.get(
      `https://eventfinderproject.herokuapp.com/?q=${text}`
    );
    dispatch({
      type: SEARCH_EVENTS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ERRORS,
      payload: error.message,
    });
  }
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
