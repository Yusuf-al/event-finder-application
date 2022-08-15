import {
  GET_EVENTS,
  SET_LOADING,
  ERRORS,
  ADD_EVENTS,
  SEARCH_EVENTS,
} from "./../actions/types";

const initalState = {
  getEventsList: [],
  isLoading: false,
  error: null,
};

const getAllEvents = (state = initalState, action) => {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        isLoading: false,
        getEventsList: action.payload,
        error: null,
      };
    case SEARCH_EVENTS:
      return {
        ...state,
        getEventsList: action.payload,
      };
    case ADD_EVENTS:
      return {
        ...state,
        isLoading: false,
        getEventsList: [...state.getEventsList, action.payload],
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ERRORS:
      return {
        ...state,
        isLoading: false,
        getEventsList: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default getAllEvents;
