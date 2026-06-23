import axios from "axios";
import React, { useState } from "react";

function About() {
  const [userData, setUserData] = useState(null);

  async function handleClick() {
    try {
      const response = await axios.get("https://api.github.com/users/adarsh24688");
      setUserData(response.data);
      console.log("User Data:", response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Hi, Minkle this side</p>
      {userData && (
        <div>
          <img src={userData.avatar_url}></img>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            
            GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default About;
