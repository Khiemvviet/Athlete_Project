import React from 'react'
import { GiMuscleUp } from "react-icons/gi";
import { GiLeg } from "react-icons/gi";
import { Link } from "react-router-dom";

const MuscleButton = () => {
  return (
    <div>
      <div className="w-full min-h-[screen] py-10 ">
      <h1 className="text-n-4 text-center mt-10 text-6xl font-bold pb-20">Get Started!</h1>
        <div className="flex flex-col items-center mt-32 mb-20 justify-center px-5 lg:flex-row lg:mr-5">
          <Link to ="/Chest">
            <button className="text-n-1 text-xl font-bold mt-5  relative h-100vh px-20 py-5 border-solid border-r border-2 rounded-full bg-n-3 hover:text-n-4 lg:mr-7">
              <GiMuscleUp color="white" size={50} />Chest
            </button>
          </Link>
          <Link to ="/Back">
            <button className="text-n-1 text-xl font-bold mt-5 relative h-100vh px-20 py-5 border-solid border-r border-2 rounded-full bg-n-3 hover:text-n-4 lg:mr-7">
              <GiMuscleUp color="white" size={50} />Back
            </button>
          </Link>
          <Link to ="/Core">
            <button className="text-n-1 text-xl font-bold mt-5 relative h-100vh px-20 py-5 border-solid border-r border-2 rounded-full bg-n-3 hover:text-n-4 lg:mr-7">
              <GiMuscleUp color="white" size={50} />Core
            </button>
          </Link>
          <Link to ="/LowerBody">
            <button className="text-n-1 text-xl flex flex-col items-center justify-center font-bold mt-5 relative h-100vh px-12 py-5 border-solid border-r border-2 rounded-full bg-n-3 hover:text-n-4 lg:mr-7">
              <GiLeg color="white" size={50} />Lower Body
            </button>
          </Link>
          <Link to ="/Drill">
            <button className="text-n-1 text-xl font-bold mt-5 relative h-100vh px-20 py-5 border-solid border-r border-2 rounded-full bg-n-3 hover:text-n-4 lg:mr-7">
              <GiLeg color="white" size={50} />Drill
            </button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default MuscleButton