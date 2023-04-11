import Sidebar from "../components/Sidebar";
import React from "react";
import Controltop from "../components/Controltop";
import Createuser from "../components/Createuser";
function Admin() {
  return (
    <div>
      <Sidebar />
      <div className="p-4 sm:ml-64 h-screen">
        <Controltop />
        <h1 className="mt-10 text-lg">
          You have several admins to control your system perfectly:
        </h1>
        <Createuser
          name="Owner"
          description="can control and view all the system content, and it's impossible for all sub admins"
        />
        <Createuser
          name="Cinema Profile"
          description="Can set location, add movies, photos of halls, place screen and seats of the cinema"
        />
        <Createuser
          name="Booking"
          description="Can see movies, so he can book tickets offline for clients and save booking details"
        />
        <Createuser
          name="Timeline"
          description="Can add profile picture, add posts and reels , see clients interactions on the posts and reels"
        />
      </div>
    </div>
  );
}

export default Admin;
