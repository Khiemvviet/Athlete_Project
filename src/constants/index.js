

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