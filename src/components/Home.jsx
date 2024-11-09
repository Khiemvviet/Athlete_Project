
import React from "react";
import AboutUs from "./AboutUs";
import MuscleButton from "./MuscleButton";
import Goat from "../assets/Goat1.mp4"

const Home = () => {
  return (
    <>
    <div className="relative w-full h-screen mt-20">
      <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
      >
        <source src= {Goat} type="video/mp4"/>
      </video>
    </div>
    <div>
      <AboutUs />
      <MuscleButton />
    </div>
    </>
  );
};

export default Home;