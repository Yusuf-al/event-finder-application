import React from "react";
import Addbutton from "../AddButton/Addbutton";
import Events from "../Events";
import NavBar from "../NavBar";

const Home = () => {
  return (
    <>
      <NavBar></NavBar>
      <Events></Events>
      <Addbutton></Addbutton>
    </>
  );
};

export default Home;
