import L1 from "../assets/L1.jpg";
import L2 from "../assets/L2.jpg";
import L3 from "../assets/L3.webp";
import L4 from "../assets/L4.jpg";
import L5 from "../assets/L5.webp";

export const navigation = [
    {
        id: "0",
        title: 'Home',
        url:"/"
    },
    {
        id: "1",
        title: "Muscle",
        url: "#",
        hasSubmenu: true,
        submenu: [
          { id: 1, title: "Back", url: "/Back" },
          { id: 2, title: "Chest", url: "/Chest" },
          { id: 3, title: "Core", url: "/Core" },
          { id: 4, title: "Drill", url: "/Drill" },
          { id: 5, title: "Lower Body", url: "/LowerBody" },
        ]
    },
    {
        id: "2",
        title: "Nutrition",
        url:"/Nutrition",
    },
    {
        id: "3",
        title: "Plan",
        url:"/Plan",
    },
    {
        id: "4",
        title: "Contact",
        url:"/Contact",
    },
]

export const buttonData = [
    { image: L1, text: "Drill", link: "/Drill", description: "Learn more essential drills for football players" },
    { image: L2, text: "Chest", link: "/Chest", description: "Learn more essential chest exercises" },
    { image: L3, text: "Lower Body", link: "/LowerBody", description: "Improve your lower body strength" },
    { image: L4, text: "Back", link: "/Back", description: "Strengthen your back for better support" },
    { image: L5, text: "Core", link: "/Core", description: "Core is a key factor for your performance" },
  ];


  export const nutri = [
    {
        title: "Carbohydrates", 
        text: "Carbs are the main energy source for soccer's high-intensity demands. Complex carbs (like oats, brown rice, and whole grains) fuel muscles and prevent fatigue by maintaining glycogen stores, which are depleted during intense play." 
    },

    {
        title: "Protein", 
        text: "Protein aids in muscle repair and recovery, helping players bounce back faster after games and intense training sessions. Adequate protein intake (1.2-1.6g per kg body weight) supports muscle strength, reduces injury risk, and improves overall performance." 
    },

    {
        title: "Fats", 
        text: "Healthy fats (from sources like avocado, olive oil, and nuts) provide sustained energy and are crucial for hormone production, which regulates muscle growth and recovery. Fats also support endurance, keeping players energized during longer games." 
    },

    { 
        title: "Timing", 
        subtext: [
            "Pre-Game: Eating a balanced meal with carbs and protein 2-3 hours before a game provides steady energy for optimal performance. Light snacks 30-60 minutes before, like a banana or energy bar, can give a final energy boost.",
            "Post-Game:  Consuming quick-digesting carbs and protein within 30 minutes after a game helps replenish glycogen stores and repairs muscles, reducing soreness and preparing players for the next workout."] 
    },

    {
        title: "Hydration", 
        text: "Staying well-hydrated maintains endurance, focus, and reduces the risk of muscle cramps. Soccer players should aim for 2-3 liters daily and include electrolytes (from sports drinks or coconut water) to restore minerals lost in sweat, especially in hot conditions."
    },

    { 
        title: "Key Nutrients",
        subtext: [
            "Iron: Supports oxygen delivery to muscles, critical for stamina and endurance. Sources include red meat, leafy greens, and fortified cereals.",
            "Vitamin D & Calcium: Vital for bone health, these nutrients reduce injury risk from soccer's high-impact movements. They can be obtained from sunlight, dairy, and fortified foods.", 
            "Omega-3s: These healthy fats, found in fish and flaxseeds, reduce inflammation and support joint health, which aids in recovery and keeps joints flexible."
        ]
    },


  ];


  export const health = [
    { description: "Lean Proteins: Chicken, turkey, fish, tofu, and legumes for muscle repair and growth." },
    { description: "Whole Grains: Brown rice, quinoa, oats, and whole-grain pasta for sustained energy." },
    { description: "Healthy Fats: Avocado, nuts, seeds, and olive oil to support joint health and energy." },
    { description: "Fruits and Vegetables: Variety of colors for essential vitamins, minerals, and antioxidants." },
    { description: "Hydrating Beverages: Water, coconut water, and electrolyte drinks to stay hydrated." },
  ];


  export const junk = [
    { description: "Sugary Drinks and Snacks: Soda, candy, and pastries can lead to energy crashes." },
    { description: "Fried and Processed Foods: Chips, fast food, and processed meats can increase inflammation." },
    { description: "High-Fat Dairy Products: Such as whole milk and heavy cream, which can be harder to digest." },
    { description: "Alcohol: Can impact hydration, recovery, and overall athletic performance." },
    { description: "Excessive Caffeine: In high doses, it can lead to dehydration and jitteriness." },
  ];