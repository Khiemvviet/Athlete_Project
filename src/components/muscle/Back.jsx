import React from 'react'
import ExerciseSummary from '../../contents/Muscle/ExerciseSummary';

const exercises = [
	{
	  title: '1. Dumbbell Row',
	  description: `Dumbbell Row is one of the back muscle exercises that gym goers love. 
		In it, the practitioner will pull the weights one by one to stimulate the middle back and lat muscles to develop thicker and wider. 
		At the same time, the back muscles also become stronger and firmer every day.`,
	  imageUrl: 'src/assets/img/bai-tap-co-lung-2-1.jpg',
	  instructions: [
		'Step 1: Prepare a flat bench along with dumbbells of appropriate weight.',
		'Step 2: Place one leg and one hand on the bench (same side) so that your torso bends forward, keeping your waist and torso parallel to the floor.',
		'Step 3: Use the other hand to lift the dumbbell from the floor straight up to your chest. Note: Keep your torso fixed and the supporting arm straight without bending.',
		'Step 4: Try to tighten your back muscles as you pull the dumbbell to the highest position, ensuring the force comes from the back muscles, not the arms.',
		'Step 5: Slowly lower the dumbbell back to the starting position and repeat with the other arm.'
	  ]
	},
	{
	  title: '2. Bent Over Dumbbell',
	  description: `When it comes to back exercises, we definitely can’t help but mention Bent Over Dummbell. This exercise is the secret of many guys who have strong, thick, and masculine backs.`,
	  imageUrl: 'src/assets/img/bai-tap-co-lung-2-2.png',
	  instructions: [
		'Step 1: Start by standing with your back straight, holding the dumbbells with your arms extended so that your palms are facing your body.',
		'Step 2: Bend down slowly, keeping your back straight and parallel to the ground and your knees slightly bent.',
		'Step 3: Use force to pull the weight up until it is close to the abdomen, then stop for about 1 second.',
		'Step 4: Slowly lower the weights to the floor as in the starting position.',
		'To make the exercise more effective, exhale as you pull the weights close to your stomach and inhale as you return to the starting position.'
	  ]
	},
	{
		title: '3. Dumbbell Renegade Row',
		description: `Dumbbell Renegade Row is the perfect exercise to help develop the entire back and triceps muscles. Thanks to such effectiveness, this exercise is also loved and chosen by many gym goers.`,
		imageUrl: 'src/assets/img/bai-tap-co-lung-2-3.png',
		instructions: [
		  'Step 1: Start in a plank position with your arms straight and holding dumbbells while leaning on the ground. Make sure your back, butt, and heels form a straight line and stay still throughout the exercise.',
		  'Step 2: Tighten your stomach and thighs and use one hand to lift the weight until it almost touches your stomach, then stop.',
		  'Step 3: Hold the position for 1 second and then slowly lower.',
		  'Step 4: Slowly lower the weights to the floor as in the starting position.',
		  'Step 5: Repeat the process with the other hand.'
		]
	  },
];

const Back = () => {
	return (
		<ExerciseSummary
      		title="Summary of effective back exercises that gymers cannot ignore"
      		exercises={exercises}
    	/>
	);
}

export default Back;





