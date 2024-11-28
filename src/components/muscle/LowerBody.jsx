import React from 'react'
import ExerciseSummary from '../../contents/Muscle/ExerciseSummary';

const exercises = [
	{
	  title: '1. Clean Pulls',
	  description: `The clean pull is a weightlifting exercise that develops explosive power, strength, and coordination. It involves pulling a barbell from the floor to just below chest height, emphasizing forceful hip extension, leg drive, and a shrug.',
		At the same time, the back muscles also become stronger and firmer every day.`,
	  imageUrl: 'src/assets/img/cleanpulls.webp',
	  instructions: [
		'Step 1: Choose a suitable weight on the barbell and position it over your mid-foot.',
		'Step 2: With feet hip-width apart, grip the bar with hands slightly wider than shoulder-width, maintaining a flat back and shoulders over the bar.',
		'Step 3: Lift the bar by powerfully extending the hips and knees, keeping it close to your shins.',
		'Step 4: As the bar passes your knees, explosively extend your hips and rise onto your toes, shrugging your shoulders.',
		'Step 5: The bar should reach maximum height, with your body fully extended and shrugging upwards.',
    'Step 6: Control the bar back down to the starting position (or drop the bar, reset and repeat)',
	  ]
	},
	{
	  title: '2. Back Squat',
	  description: `Back Squat is the ultimate lower body exercise to build strength. No other exercise can match it when it comes to developing not just strong quads, hamstrings and glutes but low back, core and even upper back strength.`,
	  imageUrl: 'src/assets/img/backsquat.webp',
	  instructions: [
		'Step 1: Place the barbell on a squat rack at chest height. Stand facing the bar.',
		'Step 2: Grip the bar wider than shoulder-width apart and duck under it, placing it on your upper traps.',
		'Step 3: Stand up, lifting the bar off the rack. Take one or two steps back to clear the rack.',
		'Step 4: Stand with feet shoulder-width apart, toes slightly pointing outward. Keep your chest up and eyes forward.',
		'Step 5: Bend your knees and hips simultaneously, pushing your hips back and down.',
    'Step 6: Lower your body until your thighs are at least parallel to the ground, keeping your knees over your toes.',
    'Step 7: Push through your heels, extending your hips and knees to return to the starting position',
	  ]
	},
	{
		title: '3. Reverse Lunge',
		description: `The reverse lunge is a lower-body exercise that strengthens the glutes, quads, and hamstrings while improving balance and stability. It involves stepping backward into a lunge position and then returning to standing.`,
		imageUrl: 'src/assets/img/reversepulls.webp',
		instructions: [
		  'Step 1: The reverse lunge is a lower-body exercise that strengthens the glutes, quads, and hamstrings while improving balance and stability. It involves stepping backward into a lunge position and then returning to standing.',
		  'Step 2: Once you have created enough room for yourself from the dumbbell rack (or wherever you pulled them from) you can begin the movement.',
		  'Step 3: Step backward with the left leg, giving yourself enough room to be able to drop into a lunge comfortably without feeling overextended.',
		  'Step 4: Keep the chest as upright as possible and drop the left knee to roughly one inch from the floor.',
		  'Step 5: Now drive through the heel and midfoot of the right foot to drive yourself back up tall.'
		]
	  },
];

const LowerBody = () => {
  return (
    <ExerciseSummary
      		title="Summary of effective back exercises that gymers cannot ignore"
      		exercises={exercises}
    	/>
  )
}

export default LowerBody