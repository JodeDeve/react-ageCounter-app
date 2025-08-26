import React from "react";
import { useState } from "react";

function Other() {
  const [name, setName] = useState();
  const updateName = () => {
    setName("hello");
  };

  const [age,setAge] = useState(0)
  const updateAge = () => {
    setAge(age + 1)
  }

  const [isEmployed,setIsEmployed] = useState(false)
  const toggleEmployed = () => {
   
    isEmployed >= 18 ? setIsEmployed(true) : setIsEmployed(false)
     
  }
  

  return (
    <>
      <p>Name: {name}</p>
      <button onClick={updateName}> set name</button>

      <p>Age: {age}</p>
      <button onClick={updateAge}> add age</button>
      <button onClick={() => {age > 0 ? setAge(age - 1) : null}} >
        reduce age
      </button>
      <button onClick={setAge(0)} > reset</button>


      <p>Are you at legal age? : {isEmployed ? "true" : "false"} </p>
      <button onClick={toggleEmployed}>click to see</button>

    </>
  );
}

export default Other;
