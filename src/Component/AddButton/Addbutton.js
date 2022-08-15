import React from "react";
import { BsFillPersonPlusFill, BsFillPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Addbutton = () => {
  return (
    <div className="position-fixed bottom-0 end-0 ">
      <Link to="add-event">
        <button className="btn btn-primary me-3 mb-3">
          <BsFillPlusCircleFill />
        </button>
      </Link>
    </div>
  );
};

export default Addbutton;
