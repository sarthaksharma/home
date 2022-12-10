// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Sarthak",
  middleName: "",
  lastName: "Sharma",
  message: " Building products one feature at a time ...",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/sarthaksharma",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/__sarthaksharma/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/sarthaksharma96/",
    },
    {
      image: "fa-redhat",
      url: "https://rhtapps.redhat.com/verify/?certId=150-236-040",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/sarthak.png"),
  imageSize: 375,
  message:
    "My name is Sarthak Sharma. I'm a Product Manager with experience in cloud computing, infrastructure, and security. A graduate from Carneige Mellon University, I love building products that leverage large scale distributed systems to empower users and businesses at scale. In my free time I like to dance, play tennis and explore the realm of technology.",
  resume: "<LINK HERE>",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "sarthaksharma", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/hashirshoaeb.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Cloud Services (AWS, GCP, Azure)", value: 95 },
    { name: "Distributed Systems", value: 90 },
    { name: "Containers / Virtualization", value: 80 },
    { name: "SQL", value: 75 },
    { name: "C/C++", value: 65 },
    { name: "Python", value: 90 },
    { name: "Java", value: 55 },
  ],
  softSkills: [
    { name: "Leadership", value: 80 },
    { name: "Product Management", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Problem Solving", value: 85 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any cool product ideas, or want to connect, hit me up at",
  email: "sarthaks@tepper.cmu.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Product Manager',
      companylogo: require('../assets/img/lyft.png'),
      date: 'Mar 2022 – Present',
    },
    {
      role: 'Sr. Product Manager - Tech ',
      companylogo: require('../assets/img/aws.jpeg'),
      date: 'May 2021 – Mar 2022',
    },
   {
      role: 'Site Reliability Engineer - II',
      companylogo: require('../assets/img/mnet.png'),
      date: 'Jun 2017 – Jan 2021',
    },
   {
      role: 'Research Associate',
      companylogo: require('../assets/img/iisc.png'),
      date: 'Jan 2017 – Jun 2017',
    },

  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
