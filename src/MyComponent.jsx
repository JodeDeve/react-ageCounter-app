import React from "react";
import { useState } from "react";

function MyComponent() {
   

  const [age, setAge] = useState(0);
  const updateAge = () => {
    setAge(age + 1);
  };

  const [isEmployed, setIsEmployed] = useState(false);
  const toggleEmployed = () => {
    age >= 18 ? setIsEmployed(true) : setIsEmployed(false);
  };

  return (
    <>
      <div>
       

        <p>Age </p>
        <h1>{age}</h1>
        <button onClick={updateAge}> add age</button>
        <button
          onClick={() => {
            age > 0 ? setAge(age - 1) : null;
          }}
        >
          reduce age
        </button>
        <button
          onClick={() => {
            setAge(0);
          }}
        >
          {" "}
          reset
        </button>

        <p>Are you at legal age? </p>
        <h1> {isEmployed ? "true" : "false"} </h1>
        <button className="nerd" onClick={toggleEmployed}>click to see</button>
      </div>
    </>
  );
}

export default MyComponent;
