import React from 'react'
import ExerciseSummary from '../../contents/Muscle/ExerciseSummary';

const exercises = [
	{
	  title: '1. Incline Dumbbell Bench Press',
	  description: `A large upper chest will help fill the gap between the chest and shoulders (clavicle position) to make the chest and shoulders more perfect.`,
	  imageUrl: 'src/assets/img/nguc-1.jpg',
	  instructions: [
		'Step 1: Sit on a chair, with both feet firmly on the floor and both hands holding the dumbbells placed on your thighs with your palms facing each other.',
		'Step 2: Use the force in your thighs to push the dumbbells to shoulder level, then rotate your wrists forward so that your palms face your thighs.',
		'Step 3: Exhale and tighten your chest muscles to push the weights up until your arms are straight (without locking your joints).',
		'Step 4: At this position, maintain for 1 - 2 seconds.',
		'Step 5: Inhale and slowly lower the weight so that the lowering time is twice as long as when lifting the weight.',
		'Step 6: To finish the exercise, place the dumbbells on your thighs and then place them on the floor instead of letting them fall freely.'
	  ]
	},
	{
	  title: '2. Standard Dumbbell Chest Press',
	  description: `Our next target is the middle pecs. To build muscle in this area.`,
	  imageUrl: 'src/assets/img/nguc-2.jpg',
	  instructions: [
		'Step 1: Lie flat on a flat bench, holding a dumbbell in each hand and placing it on top of your thighs with your palms facing each other. Keep your feet firmly planted on the floor.',
		'Step 2: Use the strength of your thighs to lift the two dumbbells up to the position above your shoulders.',
		'Step 3: Rotate both wrists so that the palms face forward and the dumbbells are in a straight line.',
		'Step 4: Slowly lower the weights down until your arms are parallel to the floor and form a 90 degree angle with your forearms.',
		'Step 5: Use your chest muscles to push the 2 dumbbells up so that your 2 arms are extended but do not lock your elbows.',
		'Step 6: Maintain the position for 1 - 2 seconds then lower the weights back to the starting position.'
	  ]
	},
	{
		title: '3. Dumbbell Front Chest Raises',
		description: `To have a thick, sharp chest groove to perfect the overall chest muscles, exercises for the inner chest muscles are indispensable in your training regimen.`,
		imageUrl: 'src/assets/img/nguc-3.jpg',
		instructions: [
		  'Step 1: Stand up straight with your feet shoulder-width apart, hold the dumbbells in both hands along your body at thigh level with your palms facing your thighs.',
		  'Step 2: Lift the dumbbells up and out in front of you with your palms facing down and your elbows slightly bent to reduce stress on your joints.',
		  'Step 3: At the position where the arm is almost parallel to the floor, stop and maintain that position for 1 - 2 seconds.',
		  'Step 4: Exhale and slowly return the dumbbells to the starting position at thigh level.',
		]
	  },
];

const Chest = () => {
  return (
    <ExerciseSummary
      		title="Best dumbbell chest exercises for comprehensive chest muscle development"
      		exercises={exercises}
    	/>
  )
}

export default Chest