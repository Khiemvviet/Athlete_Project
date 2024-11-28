import React from 'react'
import ExerciseSummary from '../../contents/Muscle/ExerciseSummary';

const exercises = [
	{
	  title: '1. Shooting Drill',
	  description: `Shooting and scoring a goal is one of the most exciting parts of soccer. Every player wants to score goals for their team and be the hero, but shooting accurately and effectively takes many hours of practice to fine-tune those skills and be ready to make a difference when you’re on the soccer field.`,
	  imageUrl: 'src/assets/img/shootingdrill.jpg',
	  instructions: [
		'Step 1: Place the ball approximately 12 yards (11m) from the goal you are using.',
		'Step 2: Kick the ball into the goal as near to the center of the goal as you can. 10 shots for each foot.',
		'Step 3: Kick the ball from the penalty spot into each corner of the goal. 10 for each corner.',
		'Step 4: Alternate between your right and left feet to improve your shooting ability with both feet. Kick the ball into each corner with your right foot first and then repeat using your left foot.',
	  ]
	},
	{
	  title: '2. Dribbling Drill',
	  description: `Dribbling means moving forward with the ball at your feet while staying in control and in possession of the ball. It is a skill that can be hard to master, but when you do, it can make a huge difference in a game.`,
	  imageUrl: 'src/assets/img/dribblingdrill.jpg',
	  instructions: [
		'Step 1: We will be setting up 5 to 10 cones in a straight line approximately 2 yards (1.8 m) from each other.',
		'Step 2: Position yourself with the ball at your feet at one end of the line of cones.',
		'Step 3: Starting with your dominant foot (for me, that is my right), gently kick the ball forward past the right-hand side of the first cone.',
		'Step 4: When the ball is about halfway between the first 2 cones, push the ball between them and follow the ball through. You will now be on the left-hand side of the row of cones.',
		'Step 5:  kick the ball forward again past the next cone and then push the ball through the next 2 cones. Follow the ball through the cones, and you will now be back on the right-hand side of the cones, then repeat.'
	  ]
	},
	{
		title: '3. Attacking Drill',
		description: `The attacking players will work together to try and find a way past the defender in front of them. Whether by passing or taking on the defenders themselves, this drill will give the players confidence in attack when in a real game situation.`,
		imageUrl: 'src/assets/img/attackingdrill.jpg',
		instructions: [
		  'Step 1: Set up the cones (marked as white dots in the above image) in a rectangle. A width of approximately 10 yards and a length of approximately 20 yards should be fine.',
		  'Step 2: The defender will start on the goal line they are defending, and the 2 attacking players will start beside the two furthest cones from the goal. One attacking player stands on each side.',
		  'Step 3: Either one of the attacking players can start with the ball. With their first touch, they must pass the ball to the other attacking player. This player can choose to run out to receive the ball or stay where they are.',
		  'Step 4: 2 players try to beat the defender, try to pass the defender.',
		  'Step 5: The attacking player’s aim in this drill is to get the ball past the defender and score a goal. The defender’s aim is to tackle the attacking players or kick the ball out of the rectangle.'
		]
	  },
];

const Drill = () => {
  return (
    <ExerciseSummary
      		title="Summary of effective back exercises that gymers cannot ignore"
      		exercises={exercises}
    	/>
  )
}

export default Drill