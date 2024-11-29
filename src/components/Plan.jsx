import React from 'react'
import WorkoutSection from '../contents/Plan/WorkoutSection';

const Plan = () => {
  const workoutSections = [
    {
      day: 'Monday - Lower Body',
      exercises: [
        { 
          name: 'Romanian Deadlift + Step-Ups', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Bulletproof your hamstring'
        },
        { 
          name: 'Bulgarian Split Squats', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Strengthen your quads'
        },
        { 
          name: 'Squats-Jumps + Calf Raises', 
          duration: '30 mins', 
          icon: '🎯',
          description: 'Jump higher for athletic movements'
        },
      ]
    },
    {
      day: 'Wednesday - Upper Body',
      exercises: [
        { 
          name: 'Pull Up + Meadow Rows', 
          duration: '30 mins', 
          icon: '💪',
          description: 'Strengthen your Back'
        },
        { 
          name: 'Barbell Bench Press + Dip', 
          duration: '30 mins', 
          icon: '🔧',
          description: 'Strengthen your Chest'
        },
        { 
          name: 'Landmine Rotation + Pallof Press', 
          duration: '30 mins', 
          icon: '⚡',
          description: 'Strengthen your core'
        },
      ]
    },
    {
      day: 'Friday',
      exercises: [
        { 
          name: 'Drill + Ball Control', 
          duration: '45 mins', 
          icon: '⚡',
          description: 'Enhance your ball control with essential drills'
        },
      ]
    }
  ];


  const workoutSections2 = [
    {
      day: 'Monday - Lower Body',
      exercises: [
        { 
          name: 'Romanian Deadlift + Step-Ups', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Bulletproof your hamstring'
        },
        { 
          name: 'Bulgarian Split Squats', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Strengthen your quads'
        },
        { 
          name: 'Squats-Jumps + Calf Raises', 
          duration: '30 mins', 
          icon: '🎯',
          description: 'Jump higher for athletic movements'
        },
      ]
    },
   {
      day: 'Tuesday - Back',
      exercises: [
        { 
          name: 'Pull Up + Meadow Rows + Plank Row', 
          duration: '1 hour', 
          icon: '💪',
          description: 'Strengthen your Back'
        },
      ]
    },
    {
      day: 'Wednesday - Chest',
      exercises: [
        { 
          name: 'Barbell Bench Press + Dip + Push Up', 
          duration: '1 hour', 
          icon: '🔧',
          description: 'Strengthen your Chest'
        },

      ]
    },
    {
      day: 'Friday',
      exercises: [
        { 
          name: 'Drill+Core', 
          duration: '2 hours', 
          icon: '⚡',
          description: 'Build explosive power, lower-body strength, and stability to improve athletic performance.'
        },
      ]
    }
  ];

  const workoutSections3 = [
    {
      day: 'Monday - Lower Body',
      exercises: [
        { 
          name: 'Romanian Deadlift + Step-Ups', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Bulletproof your hamstring'
        },
        { 
          name: 'Bulgarian Split Squats', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Strengthen your quads'
        },
        { 
          name: 'Squats-Jumps + Calf Raises', 
          duration: '30 mins', 
          icon: '🎯',
          description: 'Jump higher for athletic movements'
        },
      ]
    },
   {
      day: 'Tuesday - Back',
      exercises: [
        { 
          name: 'Pull Up + Meadow Rows + Plank Row', 
          duration: '1 hour', 
          icon: '💪',
          description: 'Strengthen your Back'
        },
      ]
    },
    {
      day: 'Wednesday - Chest',
      exercises: [
        { 
          name: 'Barbell Bench Press + Dip + Push Up', 
          duration: '1 hour', 
          icon: '🔧',
          description: 'Strengthen your Chest'
        },

      ]
    },
    {
      day: 'Thursday - Core',
      exercises: [
        { 
          name: 'Core', 
          duration: '2 hours', 
          icon: '⚡',
          description: 'Build explosive power, lower-body strength, and stability to improve athletic performance.'
        },
      ]
    },
    {
      day: 'Friday - Drill',
      exercises: [
        { 
          name: 'Drill', 
          duration: '1 hours', 
          icon: '⚡',
          description: 'Build explosive power, lower-body strength, and stability to improve athletic performance.'
        },
      ]
    }
  ];

  
  return (
    <>
    <div className="grid lg:grid-cols-3">
      <div className="max-w-4xl  p-6 bg-white shadow-lg rounded-xl mt-28 mb-10 mx-5 border-n-4 border-2">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 3 sessions a week</h1>
        {workoutSections.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-red-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-red-500' : 
              index === 3 ? 'border-red-500' : 
              'border-red-500'
            }
          />
        ))}
      </div>

      <div className="max-w-4xl  p-6 bg-white shadow-lg rounded-xl mt-28 mb-10 mx-5 border-n-4 border-2">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 4 sessions a week</h1>
        {workoutSections2.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-red-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-red-500' : 
              index === 3 ? 'border-red-500' : 
              'border-red-500'
            }
          />
        ))}
      </div>

      <div className="max-w-4xl  p-6 bg-white shadow-lg rounded-xl mt-28 mb-10 mx-5 border-n-4 border-2">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 5 sessions a week</h1>
        {workoutSections3.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-red-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-red-500' : 
              index === 3 ? 'border-red-500' : 
              'border-red-500'
            }
          />
        ))}
      </div>
      </div>
    </>


  )
}

export default Plan