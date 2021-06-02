// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [peopleInSpace, setPeopleInSpace] = useState([]);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setPeopleInSpace(data.people);
      });
  }, []);
 

  return <div>{peopleInSpace.map((person) => person.name)}</div>;
}

export default App; 