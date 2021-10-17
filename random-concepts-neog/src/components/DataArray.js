const DataArr = [
  {
    name: "Tanay Pratap", //Your name
    link: "https://twitter.com/tanaypratap", //Link to your social media handle (eg:- Twitter, Linkedin, etc.)
    profileImg:
      "https://pbs.twimg.com/profile_images/1407601239727112198/V4bunpAi_400x400.jpg", //add your favorite profile picture here
    topic: "Git", // Topic from which the question and answer is taken(eg:-Vanilla JavaScript, Git, CSS, etc.)
    question: "Explain Version Control System.  ", //question of your topic (eg:- difference between block and inline elements, callback functions, etc.)
    answer:
      "Version control allows you to manage changes to files over time and store these modifications in a database.", //answer  of the question
  },
  {
    name: "Rohit Dhatarak ",
    link: "https://twitter.com/rohit_dhatrak_",
    profileImg:
      "https://pbs.twimg.com/profile_images/1406228678468542466/W5ht7hVo_400x400.jpg",
    topic: "Vanilla Javascript",
    question: "What is a  Callback Function? ",
    answer:
      "A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.",
  },
  {
    name: "Ishan Jirety",
    link: "https://twitter.com/IshanJirety",
    profileImg:
      "https://pbs.twimg.com/profile_images/1292818758927446017/clOo0qhM_400x400.jpg",
    topic: "HTML/JavaScript",
    question: "Why do we place the script tag at the bottom of HTML body?",
    answer:
      "When you place your JavaScript at the bottom of your HTML body, it gives the HTML time to load before any of the JavaScript loads, which can prevent errors, and speed up website response time.",
  },
  {
    name: "Abhishek Gautam",
    link: "https://twitter.com/helloAbhishekk",
    profileImg:
      "https://pbs.twimg.com/profile_images/1321711959595646976/wE0W7SMJ_400x400.jpg",
    topic: "Vanilla Javascript",
    question: "What is a Promise in JavaScript?",
    answer:
      "A promise is an object that serves as a placeholder for a value. That value is usually the result of an async operation such as an HTTP request or reading a file from disk. When an async function is called it can immediately return a promise object. Using that object, you can register callbacks that will run when the operation succeeds or an error occurs.",
  },
  {
    name: "Prakhar Varshney",
    link: "https://www.linkedin.com/in/prakhar-varshney-6b3a92181/",
    profileImg:
      "https://pbs.twimg.com/profile_images/1333311550019440640/qoE2IW75_400x400.jpg",
    topic: "HTML",
    question:
      "What is Semantic HTML?Explain the differences between Semantic and Non-Semantic HTML with examples. ",
    answer:
      "Semantic tags  describes its meaning to both the user-agent as well as the end-user,some commonly used semantics are heading tags,button,footer, etc",
  },
  {
    name: "Shivam Tewari ",
    link: "https://twitter.com/ShiviPro",
    profileImg:
      "https://pbs.twimg.com/profile_images/1438796885003698176/GBYxDCZf_400x400.png",
    topic: "React",
    question: "Is react a Framework or a Library? ",
    answer:
      "React is a library  because it gives more flexibility in creating self-sustaining components rather than having a pre-determined control flow ",
  },
  {
    name: "Muthu Kumaran ",
    link: "https://twitter.com/MKumaran98",
    profileImg:
      "https://pbs.twimg.com/profile_images/1403785157639770113/UnRBl2Eb_400x400.jpg",
    topic: "CSS",
    question: "How am  I supposed to center a div in CSS?",
    answer:
      "Set a max width size of your choice  to the box with margin auto to set equal margin left and right which would ultimately center your div",
  },

  {
    name: "Shubhendu Sen ",
    link: "https://twitter.com/sen_shubhendu",
    profileImg:
      "https://personal-site-shubhendu-sen.netlify.app/images/pfp.png",
    topic: "Node JS",
    question: "What is readline-sync package?",
    answer:
      "It is a third party extension of NodeJS's inbuilt readline module which takes  user input via console without specifying an input/output interface ",
  },
  {
    name: "Aamir Nathani ",
    link: "https://twitter.com/aamir_nathani?s=20",
    profileImg:
      "https://pbs.twimg.com/profile_images/1438154224030810112/VEE1r5Fj_400x400.jpg",
    topic: "Internet/Web",
    question: "Explain how the web works.",
    answer:
      "The web is responsible for resolving request for message from the client side address  and getting response from the  server side address  by using  suitable   transfer protocols ",
  },
  { 
  name: "Jaswanth Reddy Padala ",
  link: "https://twitter.com/jaswanthreddyp2",
  profileImg:"https://pbs.twimg.com/profile_images/1329058559997296653/nbH10Caz_400x400.jpg",
  topic: "React JS",
  question: "Explain Virtual DOM",
  answer: "Virtual DOM can be refereed as a lightweight copy of actual DOM object, it makes the DOM manipulation procedure faster by updating the whole Virtual DOM, comparing it with its own pre updated version and then finally pushing  the changed objects to the actual DOM"
},
{ 
  name: "Roshan J",
  link: "https://twitter.com/DevEnforced",
  profileImg:"https://pbs.twimg.com/profile_images/1445066310879100932/B2s6bXcH_400x400.jpg",
  topic: "React JS",
  question: "Briefly describe the structure of create-react-app files",
  answer: "It starts with the static HTML page which has a div with an id of 'root',it references that div element inside the javascript file and then we import 'React' and 'ReactDOM' modules for using react features such as components, jsx etc and for rendering the content to the actual DOM respectively"
}
];

export default DataArr;

/*  FORMAT TO SUBMIT YOUR QUESTION AND ANSWER
{ 
  name: " ",
  link: "",
  profileImg:"",
  topic: "",
  question: "",
  answer: ""
}
*/
