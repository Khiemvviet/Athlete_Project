import React from 'react'
import { GiMuscleUp } from "react-icons/gi";
import { Link } from "react-router-dom";

const MuscleButton = () => {
  return (
    <div>
      <div className="w-full min-h-[screen] py-10 ">
        <div className="flex flex-co items-center mt-32 mb-32 w-[50%] justify-end px-5 lg: flex-row">
          <Link to ="/Chest">
            <button className="relative justify-between items-center px-5 py-5 w-60 text-n-1 bg-n-3 rounded border-n-4">
              <GiMuscleUp color="white" size={50} />Chest
            </button>
          </Link>

        </div>

      </div>
    </div>
  )
}

export default MuscleButton