import React from 'react'
import WorkoutSection from '../contents/Plan/WorkoutSection';

const Plan = () => {
  const workoutSections = [
    {
      day: 'Monday',
      exercises: [
        { 
          name: 'Dumbbell Row + Bent Over Dumbell + Dumbbell Renegade Row', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'In it, the practitioner will pull the weights one by one to stimulate the middle back and lat muscles to develop thicker and wider. '
        },
        { 
          name: 'Back Squat + Clean Pulls ', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'The back squat builds lower-body strength, power, and stability, while clean pulls enhance explosive power and coordination, targeting the posterior chain. Together, they improve overall strength and athletic performance.'
        }
      ]
    },
    {
      day: 'Wednesday',
      exercises: [
        { 
          name: 'Incline Dumbbell Bench Press + Standard Dumbbell Chest Press + Dumbbell Front Chest Raise', 
          duration: '60 mins', 
          icon: '💪',
          description: 'This exercise is the secret of many guys who have strong, thick, and masculine chest.'
        },
        { 
          name: 'Dumbbell V-Sits + Dumbbel Russian Twist', 
          duration: '30 mins', 
          icon: '🔧',
          description: 'Dumbbell V-Sits + Russian Twists build core strength, stability, and rotational power for a stronger midsection.'
        }
      ]
    },
    {
      day: 'Friday',
      exercises: [
        { 
          name: 'Shooting Drill + Dribbling Drill + Attaking Drill', 
          duration: '45 mins', 
          icon: '⚡',
          description: 'Shooting, Dribbling, and Attacking Drills enhance accuracy, ball control, and offensive skills, improving overall gameplay and decision-making.'
        },
        { 
          name: 'Reverse Lunger', 
          duration: '15 mins', 
          icon: '🚀',
          description: 'Reverse Lunge builds lower-body strength, balance, and stability, targeting glutes, quads, and hamstrings.'
        }
      ]
    }
  ];

  const workoutSections2 = [
    {
      day: 'Monday',
      exercises: [
        { 
          name: 'Dumbbell Row + Bent Over Dumbbell', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Dumbbell Row + Bent Over Dumbbell strengthen the back, shoulders, and arms, improving posture and upper-body stability. '
        },
        { 
          name: 'Shooting Drill', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Practice precision and power while having fun perfecting your shot accuracy and technique!.'
        }
      ]
    },
    {
      day: 'Tuesday',
      exercises: [
        { 
          name: 'Incline Dumbbell Bench Press + Standard Dumbbell Chest Press + Dumbbell Front Chest Raises', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Strengthen and sculpt your chest, shoulders, and upper body while enhancing stability and control. '
        },
        { 
          name: 'Dribbling Drill', 
          duration: '20 mins', 
          icon: '🎯',
          description: ' Boost ball control, speed, and coordination while having fun mastering your dribbling skill.'
        }
      ]
    },
    {
      day: 'Wednesday',
      exercises: [
        { 
          name: 'Dumbbell V-Sits + Dumbbell Crunch + Dumbbell Russian Twist', 
          duration: '60 mins', 
          icon: '💪',
          description: 'Strengthen and define the core, improving stability, rotational power, and overall abdominal strength.'
        },
        { 
          name: 'Attacking Drill', 
          duration: '30 mins', 
          icon: '🔧',
          description: 'Improve offensive skills, positioning, and decision-making by practicing quick movements, shots on goal, and creating scoring opportunities.'
        }
      ]
    },
    {
      day: 'Friday',
      exercises: [
        { 
          name: 'Clean Pulls + Back Squat + Reverse Lunge', 
          duration: '30 mins', 
          icon: '⚡',
          description: 'Build explosive power, lower-body strength, and stability while targeting the glutes, quads, hamstrings, and posterior chain for improved athletic performance.'
        },
        { 
          name: 'Attacking Drill', 
          duration: '45 mins', 
          icon: '🚀',
          description: 'Practice your offensive moves and finishing skills, then enjoy a fun, relaxing cool-down to celebrate your hard work and boost team spirit.'
        }
      ]
    }
  ];

  const workoutSections3 = [
    {
      day: 'Monday',
      exercises: [
        { 
          name: 'Dumbbell Row + Bent Over Dumbbell + Dumbbell Renegade Row', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Target your back, shoulders, and arms, while boosting core stability and overall strength. '
        },
        { 
          name: 'Dumbbell Front Chest Raises + Standard Dumbbell Chest Press', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Strengthen and sculpt your chest and shoulders, enhancing upper-body power and definition.'
        }
      ]
    },
    {
      day: 'Tuesday',
      exercises: [
        { 
          name: 'Dumbbell Russian Twist + Dumbbell Crunch + Dumbbell V-Sits', 
          duration: '45 mins', 
          icon: '🏃',
          description: 'Tone and strengthen your core, engaging your abs and obliques for improved stability and definition. '
        },
        { 
          name: 'Reverse Lunge + Back Squat', 
          duration: '20 mins', 
          icon: '🎯',
          description: 'Strengthen your legs and glutes.'
        }
      ]
    },
    {
      day: 'Wednesday',
      exercises: [
        { 
          name: 'Shooting Drill + Dribbling Drill + Attacking Drill', 
          duration: '60 mins', 
          icon: '💪',
          description: 'Master the fundamentals and elevate your game! Sharpen your shooting accuracy, enhance ball control, and perfect your offensive skills to create scoring opportunities and dominate on the field.'
        },
      
      ]
    },
    {
      day: 'Thursday',
      exercises: [
        { 
          name: 'Incline Dumbbell Bench Press + Standard Dumbbell Chest Press', 
          duration: '30 mins', 
          icon: '⚡',
          description: 'Elevate your chest workout! Build upper chest strength, define your pecs, and sculpt your shoulders and triceps.'
        },
        { 
          name: 'Clean Pulls + Back Squat', 
          duration: '45 mins', 
          icon: '🚀',
          description: 'Supercharge your lower-body strength and explosive power! Perfect for building strong glutes, quads, and hamstrings, while enhancing athletic performance and full-body coordination.'
        }
      ]
    },
    {
      day: 'Friday',
      exercises: [
        { 
          name: 'Bent Over Dumbbell + Dumbbell Renegade Row', 
          duration: '30 mins', 
          icon: '⚡',
          description: 'Unleash your upper-body power! Strengthen your back, shoulders, and arms while engaging your core, improving posture, and building functional strength with every rep!'
        },
        { 
          name: 'Dumbbell Russian Twist + Dumbbell Crunch', 
          duration: '45 mins', 
          icon: '🚀',
          description: 'Ignite your core with this powerful combo! Sculpt your abs and obliques, boost your rotational strength, and feel the burn as you build a stronger, more defined midsection!.'
        }
      ]
    }
  ];

  
  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-28 mb-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 3 sessions a week</h1>
        {workoutSections.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-green-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-yellow-500' : 
              index === 3 ? 'border-blue-500' : 
              'border-purple-500'
            }
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-28 mb-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 4 sessions a week</h1>
        {workoutSections2.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-green-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-yellow-500' : 
              index === 3 ? 'border-blue-500' : 
              'border-purple-500'
            }
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-28 mb-10">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Workout schedule 5 sessions a week</h1>
        {workoutSections3.map((section, index) => (
          <WorkoutSection 
            key={section.day} 
            day={section.day} 
            exercises={section.exercises} 
            borderColor={
              index === 0 ? 'border-green-500' : 
              index === 1 ? 'border-red-500' : 
              index === 2 ? 'border-yellow-500' : 
              index === 3 ? 'border-blue-500' : 
              'border-purple-500'
            }
          />
        ))}
      </div>
    </>


  )
}

export default Plan