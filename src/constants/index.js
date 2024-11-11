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