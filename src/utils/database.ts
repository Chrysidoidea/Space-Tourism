//databank for the navigation
export const navigationData = [
    {place: "00", title: "Home", link: ""},
    {place: "01", title: "Destination", link: "destination"},
    {place: "02", title: "Crew", link: "crew"},
    {place: "03", title: "Technology", link: "technology"},
];
//databank for page headings
export const pageHeading = [
    {place: "01", title: "Pick your destination"},
    {place: "02", title: "Meet your crew"},
    {place: "03", title: "Space Launch 101"}
];
//databank with links for backgrounds for Main component
export const mainBackgroundDatabase = {
    home: {
        mobile: "/assets/background/home/background-home-mobile.jpg",
        tablet: "/assets/background/home/background-home-tablet.jpg",
        desktop: "/assets/background/home/background-home-desktop.jpg",
    },
    destination: {
        mobile: "/assets/background/destination/background-destination-mobile.jpg",
        tablet: "/assets/background/destination/background-destination-tablet.jpg",
        desktop: "/assets/background/destination/background-destination-desktop.jpg",
    },
    crew: {
        mobile: "/assets/background/crew/background-crew-mobile.jpg",
        tablet: "/assets/background/crew/background-crew-tablet.jpg",
        desktop: "/assets/background/crew/background-crew-desktop.jpg",
    },
    technology: {
        mobile: "/assets/background/technology/background-technology-mobile.jpg",
        tablet: "/assets/background/technology/background-technology-tablet.jpg",
        desktop: "/assets/background/technology/background-technology-desktop.jpg",
    },
};
//databank for moons
export const destinationObject = {
    moon: "/assets/img/destination/image-moon.webp",
    mars: "/assets/img/destination/image-mars.webp",
    europa: "/assets/img/destination/image-europa.webp",
    titan: "/assets/img/destination/image-titan.webp",
};
export const destination = [
    "mars",
    "europa",
    "titan",
    "moon",
];
export type Destination = {
    name: string;
    images: {
      png: string;
      webp: string;
    };
    description: string;
    distance: string;
    travel: string;
  };

export const destinations = [
    {
        name: "moon",
        images: {
            png: "/Space-Tourism/assets/img/destination/image-moon.png",
            webp: "/Space-Tourism/assets/img/destination/image-moon.webp",
        },
        description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
    {
        name: "mars",
        images: {
            png: "/Space-Tourism/assets/img/destination/image-mars.png",
            webp: "/Space-Tourism/assets/img/destination/image-mars.webp",
        },
        description: "Don’t forget to pack your hiking bag. You can arrive in any climate, any weather, so you can see the great outdoors and get an amazing view of the planet. ",
        distance: "225 mil. km",
        travel: "9 months",
    },
    {
        name: "europa",
        images: {
            png: "/Space-Tourism/assets/img/destination/image-europa.png",
            webp: "/Space-Tourism/assets/img/destination/image-europa.webp",
        },
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for skiing and snowboarding.",
        distance: "628 mil. km",
        travel: "3 years",
    },
    {
        name: "titan",
        images: {
            png: "/Space-Tourism/assets/img/destination/image-titan.png",
            webp: "/Space-Tourism/assets/img/destination/image-titan.webp",
        },
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 bil. km",
        travel: "7 years",
    }
]


