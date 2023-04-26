import React from "react";
import Controltop from "../components/Controltop";

import Profileabout from "../components/Profileabout";
import Profilemovies from "../components/Profilemovies";
function Profile() {
  return (
    <div className="dark:text-gray">
      {/* two options here movies_about or user  */}
      <Controltop entry='movies_about' />
      <Profilemovies/>
      {/* <Profileabout/> */}
      
   
    </div>
  );
}

export default Profile;
