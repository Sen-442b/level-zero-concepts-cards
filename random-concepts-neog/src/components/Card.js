import React, { useState } from "react";
import DataArr from "./DataArray";



let usedRandomIndexArr = new Set();
export default function Card() {
  let [index, setIndex] = useState(0);
  const[message,setMessage] = useState("")
  // const [social, setSocial] = useState("ion-social-twitter-outline");

  function getRandomIndex() {
    setMessage("")
      let randomNum = Math.floor(Math.random() * DataArr.length)
      while(usedRandomIndexArr.has(randomNum)){
          randomNum = Math.floor(Math.random() * DataArr.length)
          if(usedRandomIndexArr.size===DataArr.length){
              usedRandomIndexArr.clear()
              setMessage("You've read all the answers from the list")

          }
      }
      usedRandomIndexArr.add(randomNum)
      setIndex(randomNum)

     

      
   
  }
  // function getSocialLink(){
  //    //using this function to change the icons of socials as well
  //    const currentLink =DataArr[index].link
  //    console.log(currentLink)
  //    if(currentLink.includes("fd")){
       
  //      setSocial("ion-social-linkedin-outline")
  //      console.log("hi")
  //    }else{
  //      setSocial("ion-social-twitter-outline")
  //    }

  // }

  return (
    <div>
    <div className="main-div">
         {/* */}
         {" "}
        <img src={DataArr[index].profileImg.trim()} alt="profile-sample1" className="background"/>
        <img className="profile-img" src={DataArr[index].profileImg.trim()} alt={DataArr[index].name } />
        <a href={DataArr[index].link} target="_blank" rel="noreferrer"> <i className="ion-social-twitter-outline"></i></a>
      
      {/*  */}

      <h1>{DataArr[index].topic} </h1>
      <h3>{DataArr[index].question} </h3>
      <p className="text-content">{DataArr[index].answer}</p>
      
   
     
    
      <p> by {DataArr[index].name}</p>

      
      <p>{message}</p>
      <button onClick={getRandomIndex}>Get a  Random Concept </button>
      
   
    </div>
  

    </div>
  );
}
