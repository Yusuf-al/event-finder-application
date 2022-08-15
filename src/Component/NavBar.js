import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { searchEvents } from "../actions/eventAction";

const NavBar = () => {
  const searchText = useRef("");

  const dispatch = useDispatch();

  const handleSerch = () => {
    dispatch(searchEvents(searchText.current.value));
  };

  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <a className="navbar-brand"> FindMyEvents</a>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            ref={searchText}
            onChange={handleSerch}
            placeholder="Search Event"
            aria-label="Search"
          />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
