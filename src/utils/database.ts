//databank for the navigation
export const navigationData = [
  { place: "00", title: "Home", link: "" },
  { place: "01", title: "Destination", link: "destination" },
  { place: "02", title: "Crew", link: "crew" },
  { place: "03", title: "Technology", link: "technology" },
];
//databank for page headings
export const pageHeading = [
  { place: "01", title: "Pick your destination" },
  { place: "02", title: "Meet your crew" },
  { place: "03", title: "Space Launch 101" },
];
//databank with links for backgrounds for Main component
export const mainBackgroundDatabase = {
  home: {
    mobile: "./assets/background/home/background-home-mobile.jpg",
    tablet: "./assets/background/home/background-home-tablet.jpg",
    desktop: "./assets/background/home/background-home-desktop.jpg",
  },
  destination: {
    mobile: "./assets/background/destination/background-destination-mobile.jpg",
    tablet: "./assets/background/destination/background-destination-tablet.jpg",
    desktop:
      "./assets/background/destination/background-destination-desktop.jpg",
  },
  crew: {
    mobile: "./assets/background/crew/background-crew-mobile.jpg",
    tablet: "./assets/background/crew/background-crew-tablet.jpg",
    desktop: "./assets/background/crew/background-crew-desktop.jpg",
  },
  technology: {
    mobile: "./assets/background/technology/background-technology-mobile.jpg",
    tablet: "./assets/background/technology/background-technology-tablet.jpg",
    desktop: "./assets/background/technology/background-technology-desktop.jpg",
  },
};
//databank for moons
export const destinationObject = {
  moon: "/assets/img/destination/image-moon.webp",
  mars: "/assets/img/destination/image-mars.webp",
  europa: "/assets/img/destination/image-europa.webp",
  titan: "/assets/img/destination/image-titan.webp",
};
export const destination = ["mars", "europa", "titan", "moon"];
export type DestinationTypes = {
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
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "mars",
    images: {
      png: "/Space-Tourism/assets/img/destination/image-mars.png",
      webp: "/Space-Tourism/assets/img/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking bag. You can arrive in any climate, any weather, so you can see the great outdoors and get an amazing view of the planet. ",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "europa",
    images: {
      png: "/Space-Tourism/assets/img/destination/image-europa.png",
      webp: "/Space-Tourism/assets/img/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for skiing and snowboarding.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "titan",
    images: {
      png: "/Space-Tourism/assets/img/destination/image-titan.png",
      webp: "/Space-Tourism/assets/img/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

export type Crew = {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
  url: string;
};

export const crew = [
  {
    name: "Douglas Hurley",
    images: {
      png: "/assets/img/crew/image-douglas-hurley.png",
      webp: "/assets/img/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    url: "commander",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "/assets/img/crew/image-anousheh-ansari.png",
      webp: "/assets/img/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    url: "engineer",
  },
  {
    name: "Victor Glover",
    images: {
      png: "/assets/img/crew/image-victor-glover.png",
      webp: "/assets/img/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    url: "pilot",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "/assets/img/crew/image-mark-shuttleworth.png",
      webp: "/assets/img/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    url: "mspecialist",
  },
];
export type Technology = {
  name: string;
  info: string;
  images: {
    portrait: string;
    landscape: string;
  };
  url: string;
};

export const technology = [
  {
    name: "Launch vehicle",
    info: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    images: {
      portrait: "/assets/img/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/img/technology/image-launch-vehicle-landscape.jpg",
    },
    url: "launch-vehicle",
    position: "1",
  },
  {
    name: "Spaceport",
    info: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    images: {
      portrait: "/assets/img/technology/image-spaceport-portrait.jpg",
      landscape: "/assets/img/technology/image-spaceport-landscape.jpg",
    },
    url: "spaceport",
    position: "2",
  },
  {
    name: "Space capsule",
    info: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    images: {
      portrait: "/assets/img/technology/image-space-capsule-portrait.jpg",
      landscape: "/assets/img/technology/image-space-capsule-landscape.jpg",
    },
    url: "space-capsule",
    position: "3",
  },
];
