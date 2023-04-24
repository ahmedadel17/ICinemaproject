import React from "react";
import Controltop from "../components/Controltop";
import Moviecard from "../components/Moviecard";
import Searchinput from "../components/Searchinput";
import Sidebar from "../components/Sidebar";
function Profile() {
  return (
    <div>
      <Controltop />
      
      <div className="flex mt-5">
        <div className="w-1/2  h-screen ">
          <div></div>

          <div className="h-1/2">
            <h1 className="text-lg ml-5 mb-5 mt-5 font-bold">Showing now</h1>
            <Searchinput />
            <Moviecard />
          </div>

          <div className="h-1/2">
            <h1 className="text-lg ml-5 mb-5 mt-5 font-bold">Coming soon</h1>

            <Searchinput />

            <Moviecard />
          </div>
        </div>

        <div className="w-1/2  h-screen ">
          <h1 className="ml-5 mt-5 font-bold text-xl">Advertise</h1>

          <img
            src="https://m.media-amazon.com/images/M/MV5BMTU1ZjgzMTAtNGJhNC00NjE5LWI0Y2QtZmQxYmMxNzNiY2VhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg"
            alt="shalaby"
            className="w-3/4 h-2/4 rounded-lg mx-auto border-yellow-500 border-4 mt-40 "
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
