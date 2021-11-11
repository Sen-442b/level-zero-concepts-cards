const DataArr = [
  {
    name: "Tanay Pratap", //Your name
    link: "https://twitter.com/tanaypratap", //Link to your social media handle (eg:- Twitter, Linkedin, etc.)
    profileImg:
      "https://pbs.twimg.com/profile_images/1449982666284023808/mqacJu_f_400x400.jpg", //add your favorite profile picture here
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
  question: "Explain Virtual DOM.",
  answer: "Virtual DOM can be referred as a lightweight copy of actual DOM object, it makes the DOM manipulation procedure faster by updating the whole Virtual DOM, comparing it with its own pre updated version and then finally pushing  the changed objects to the actual DOM"
},
{ 
  name: "Roshan J",
  link: "https://twitter.com/DevEnforced",
  profileImg:"https://pbs.twimg.com/profile_images/1445066310879100932/B2s6bXcH_400x400.jpg",
  topic: "React JS",
  question: "Briefly describe the structure of create-react-app files",
  answer: "It starts with the static HTML page which has a div with an id of 'root',it references that div element inside the javascript file and then it  imports 'React' and 'ReactDOM'((by default)) modules for using react features such as components, jsx etc and for rendering the content to the actual DOM respectively"
},
{ 
  name: "Nikhil Belide ",
  link: "https://twitter.com/Nikhil_Belide",
  profileImg:"https://pbs.twimg.com/profile_images/1414795650147835911/XW8zHlP0_400x400.jpg",
  topic: "React JS",
  question: "Explain react synthetic events",
  answer: "synthetic events can be termed as the replica of native JS events which which can fire a callback function after the target event is triggered without using the '.addEventListener()' method ",

},
{
  name: "dummyOne",
  link: "#",
  profileImg:"http://www.hair4life.in/wp-content/uploads/2016/07/Dummy-Profile-Picture.jpg",
  topic: "React JS",
  question: "What is Array destructuring ?",
  answer: "It is an ES6 expression which lets you unpack  the values of an array into variables according to the indexes of  that specific array without imperatively storing them in a variable "
},
{ 
  name: "Aman Tulsyan ",
  link: "https://twitter.com/aman_fullstack",
  profileImg:"https://pbs.twimg.com/profile_images/1439169570367946759/M26e_5Jw_400x400.jpg",
  topic: "React JS",
  question: "What are Hooks in react?",
  answer: "Hooks are inbuilt functions with specific guidelines which facilitates usage of state variables, lifecycle methods etc  in a functional component  "
},
{ 
  name: "Dummy Two ",
  link: "#",
  profileImg:"https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-default-avatar-photo-placeholder-profile-icon-female-eps-file-easy-to-edit-124557835.jpg",
  topic: "Vanilla JavaScript",
  question: "Explain Render tree",
  answer: "When  CSSOM is combined DOM  it creates a 'render tree' which at last assigns all the visible elements in the screen with specified pixels"
},
{
  name: "Kevin Solomon",
  link: "https://twitter.com/kevinsolomon777",
  profileImg:"https://pbs.twimg.com/profile_images/1433717272925773832/PuvEV0_c_400x400.jpg",
  topic: "Vanilla JavaScript/Browser",
  question: "What are Browser APIs",
  answer: "Interfaces which are built in the user's browser that allow the client-side application to interact with complicated procedures like displaying media, manipulating documents, rendering elements, showing date etc. without repeatedly writing complex low level code "
},
{ 
  name: "Mauli Mogal ",
  link: "https://twitter.com/MauliMogal",
  profileImg:"https://pbs.twimg.com/profile_images/1338277558337454081/A7fRtUXj_400x400.jpg",
  topic: "JavaScript",
  question: "Explain how '.querySelector()' method works internally",
  answer: "Firstly it takes a valid CSS selector as its parameter then it traverses through the whole document/DOM using depth first search pre-order traversal i.e. it recursively starts with the root element node  then it traverses  the left most child node and then the right node to find and reference of the element with the specified selector"
},
{
  name: "Shishir Neupane ",
  link: "https://twitter.com/shishirsneupane",
  profileImg:"https://pbs.twimg.com/profile_images/1396743059820269568/V2zqrFLJ_400x400.jpg",
  topic: "Git/GitHub",
  question: "What type of  states a file in a repository has to go after I make some changes in it?",
  answer: "The initial stage is when the changes are 'untracked' i.e. git knows that there are modifications in a file but it doesn't tracks it unless the user explicitly commands it to a͟d͟d͟ all the files in the 'staged' area, here git keeps a database of all the differences between the pre-updated and updated file in a working tree and once the user commands it to c͟o͟m͟m͟i͟t͟ the changes then only it considers the file as truly modified and finally it takes the snapshot of those committed changes by giving it a unique hash key"
},
{ 
  name: "Omkar Patke ",
  link: "https://twitter.com/omkar_patke",
  profileImg:"https://pbs.twimg.com/profile_images/1429809122526916623/MNzQ8zPm_400x400.jpg",
  topic: "Git/GitHub",
  question: "What's the difference between Git and Github?",
  answer: "Git is a distributed version control software which works in your local machine, it tracks changes in your source code and it also can communicate with a remote repository hosting servers for  transferring  data whereas Github is a web based product which  hosts git repositories and facilitates features like source code management,version control,project collaboration etc"
},
{ 
  name: "Dummy Three ",
  link: "#",
  profileImg:"http://www.hair4life.in/wp-content/uploads/2016/07/Dummy-Profile-Picture.jpg",
  topic: "HTML",
  question: "What's the difference between HTML head tag and body tag ",
  answer: "Meta tags are the tags which contains metadata which is no shown to the user in the webpage itself rather most of the tags are used by the user-agent and body tag consists of all the elements through which a user can interact with"
},
{ 
  name: "Dummy Four ",
  link: "#",
  profileImg:"http://www.hair4life.in/wp-content/uploads/2016/07/Dummy-Profile-Picture.jpg",
  topic: "HTML/CSS",
  question: "What are CSS selectors? ",
  answer: "CSS selectors defines the element to apply a css rule, some basic CSS selectors includes 1)Universal Selectors 2)Type Selectors 3)Class Selectors 4)Id Selectors and 5)Attribute Selectors "
},
{ 
  name: "Dummy Five ",
  link: "#",
  profileImg:"http://www.hair4life.in/wp-content/uploads/2016/07/Dummy-Profile-Picture.jpg",
  topic: "HTML/CSS",
  question: "Explain CSS box model? ",
  answer: "The browser engine gives  a box like model to the DOM elements while rendering it, such model is called as css box model which consists of manipulative properties like 1)Content area:- it has the main text/visual/audio content 2)Padding:-the area of  difference between the content edge and border of the element is known as padding 3)Border:- covers the whole element in a border like structure 4)Margin:-its the area of difference between the element with neighbor and parent elements"
},

  { 
    name: "Dummy Five ",
    link: "#",
    profileImg:"http://www.hair4life.in/wp-content/uploads/2016/07/Dummy-Profile-Picture.jpg",
    topic: "Client Side JavaScript",
    question: "Explain '.addEventListener()' method",
    answer: "It's a method of EventTarget interface which takes two required parameters first one being a string specifies the type of event and second one being a callback function which subsequently gets called when  the target event is  registered"
  },

  ,{ 
    name: "Dummy Five ",
    link: "#",
    profileImg:"http://www.hair4life.in/wp-content/uploads/2016/07/Dummy-Profile-Picture.jpg",
    topic: "HTML",
    question: "What is the difference between block level and inline elements",
    answer: "In an normal flow block level elements  goes from top to bottom  i.e. it always starts from a new because it covers the whole width of teh document whereas  inline elements is displayed in inline direction, that is the direction words are displayed in a sentence according to the the writing mode of such sentence and height and width of an inline level element can't be manipulated"
  },{
    name: "Dummy Six ",
    link: "#",
    profileImg:"http://www.hair4life.in/wp-content/uploads/2016/07/Dummy-Profile-Picture.jpg",
    topic: "JavaScripts/Browser APIs",
    question: "How the Fetch API works?",
    answer: "It takes an inbuilt function named 'fetch()' which takes a required parameter of the destination of resources to be fetched and sends it to the destination sever and then returns a promise and if the promise gets resolved then using the .then() method we get the response object and its body is then parsed into a JavaScript object using a callback function using another promise and  to actually utilize the data .then() method is again used to pass necessary callback functions"

  },{
    name: "Jaswanth ",
    link: "#",
    profileImg:"http://www.hair4life.in/wp-content/uploads/2016/07/Dummy-Profile-Picture.jpg",
    topic: "HTML",
    question: "How the Fetch API works?",
    answer: "It takes an inbuilt function named 'fetch()' which takes a required parameter of the destination of resources to be fetched and sends it to the destination sever and then returns a promise and if the promise gets resolved then using the .then() method we get the response object and its body is then parsed into a JavaScript object using a callback function using another promise and  to actually utilize the data .then() method is again used to pass necessary callback functions"

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
