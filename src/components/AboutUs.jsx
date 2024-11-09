import React from 'react'

const AboutUs = () => {
  return (
    <div className="flex px-10 flex-col bg-n-4 text-n-1 justify-between ">
      <div id="Intro" className="font-bold mt-20 mb-20 text-6xl text-center ">
        <h1>What is Athletic Workout?</h1>
      </div>
      <div id="Description" className="text-xl mt-20 mb-10">
        <p>Athlete workouts are specialized training programs designed to enhance the performance of athletes, focusing on sport-specific skills, strength, endurance, speed, and agility.
          These workouts are tailored to the unique needs of the sport, with attention to periodization and recovery.
        </p>

      <div className="mt-5 py-5 px-5 text-left">
        <ol className="list-decimal py-2 px-2">
          <li>Optimizing Performance: Improve sport-specific abilities, such as power for sprinters, stamina for long-distance runners, or strength for football players.</li>
          <li>Injury Prevention: Build a balanced body, improve flexibility, and focus on recovery techniques to reduce the risk of injury during training and competition.</li>
          <li>Building Endurance: Enhance cardiovascular and muscular endurance, which is crucial for sustained performance throughout competitions.</li>
          <li>Enhancing Strength and Power: Develop explosive power, strength, and speed, which are often needed to outperform opponents.</li>
          <li> Sport-Specific Skill Development: Focus on improving technique, movement efficiency, and skills that directly contribute to success in the athlete's specific sport.</li>
          <li>Periodization and Peak Performance: Train at varying intensities and focuses during different phases of the year to peak at the right time for competitions.</li>
        </ol>
        </div>

    

      </div>
      
    </div>
  )
}

export default AboutUs