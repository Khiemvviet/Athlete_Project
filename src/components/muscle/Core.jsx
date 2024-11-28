import React from 'react'
import ExerciseSummary from '../../contents/Muscle/ExerciseSummary';

const exercises = [
	{
	  title: '1. Dumbbell Russian Twist',
	  description: 'This is a fairly familiar and effective dumbbell abdominal exercise, suitable for both men and women. This exercise not only reduces lower belly fat but also affects the intercostal muscles on both sides, helping to firm this muscle and create a clearer shape.',
	  imageUrl: 'src/assets/img/bung-1.jpg',
	  instructions: [
		'Step 1: Sit on the mat, bend your legs so that your knees form a 90-degree angle. Lift both legs off the floor at the same time so that your legs form a V with your body. Toes point toward the ceiling.',
		'Step 2: Hold a dumbbell in front of your chest with both hands. Lean back slightly.',
		'Step 3: Tighten your abs. Keep your buttocks firmly on the floor. Twist your upper body and arms to the right. At the same time, twist your knees to the left.',
		'Step 4: Pause for 1 second then twist your torso to the left and your legs to the right.',
		'Step 5: Repeat the movement.'
	  ]
	},
	{
	  title: '2. Dumbbell Crunch',
	  description: `Crunch is a basic abdominal exercise that almost every Gymer is familiar with. Dumbbell Crunch - abdominal exercise with dumbbells is a variation of the Crunch exercise. The movements are performed similarly, the only difference is that during the exercise you will hold an additional dumbbell.`,
	  imageUrl: 'src/assets/img/bung-2.jpg',
	  instructions: [
		'Step 1: Lie on your back on the mat. Bend your legs at a 90-degree angle. Hold a dumbbell in each hand and raise it straight up in front of you.',
		'Step 2: Exhale, tighten your abdominal muscles, lift your shoulders until they are about 7-10 cm from the floor, then pause for 1 second. At this time, your back remains fixed in contact with the floor.',
		'Step 3: Tighten your abdominal muscles, inhale then return your shoulders to the starting position.',
		'Step 4: Repeat the movement.',
	  ]
	},
	{
		title: '3. Dumbbell V-Sits',
		description: `V-sitting is a fairly familiar exercise. If you are bored with this exercise, you can switch to V-sitting with dumbbells. The effect will increase quite a bit.`,
		imageUrl: 'src/assets/img/bung-3.jpg',
		instructions: [
		  'Step 1: Lie on the mat with your legs and arms straight. Hold a dumbbell in each hand and raise it high above your head.',
		  'Step 2: Exhale, tightening your abdominal muscles. Raise your arms and legs at the same time so that your body forms a V shape. Raise your arms so that they are parallel to your legs.',
		  'Step 3: Pause for 1 second at the highest position. Slowly return your body to the starting position, inhaling.',
		  'Step 4: Repeat the movement.'
		]
	  },
];

const Core = () => {
  return (
    <ExerciseSummary
      		title="Summary of effective back exercises that gymers cannot ignore"
      		exercises={exercises}
    	/>
  )
}

export default Core