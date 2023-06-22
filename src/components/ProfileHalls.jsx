import React, { useState } from "react";
import { editIcon } from "../assets";
import AddHall from "./AddHall";
import { hallOneChairs, hallTowChairs } from "./txt";
import HallChairs from "./HallChairs";

const ProfileHalls = () => {
  const [activeTab, setActiveTab] = useState("hall1");
  return (
    <>
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center flex-1 gap-2 rounded-xl py-1 px-2 sm:py-2 sm:px-4 shadow-md dark:shadow-darkShadow overflow-auto bg-white dark:bg-dark">
          <button
            className={`px-6 py-1 font-light rounded-lg border border-primary whitespace-nowrap transition-colors md:px-12 ${
              activeTab === "hall1" ? "bg-primary text-dark" : "text-primary"
            }`}
            onClick={() => setActiveTab("hall1")}
          >
            Hall 1
          </button>

          <button
            className={`px-6 py-1 font-light rounded-lg border border-primary whitespace-nowrap transition-colors md:px-12 ${
              activeTab === "hall2" ? "bg-primary text-dark" : "text-primary"
            }`}
            onClick={() => setActiveTab("hall2")}
          >
            Hall 2
          </button>

          <button
            className={`px-6 py-1 font-light rounded-lg border border-primary whitespace-nowrap transition-colors md:px-12 ${
              activeTab === "hall3" ? "bg-primary text-dark" : "text-primary"
            }`}
            onClick={() => setActiveTab("hall3")}
          >
            Hall 3
          </button>
        </div>

        <button
          className={`p-3 rounded-xl shadow-md dark:shadow-darkShadow bg-white dark:bg-dark ${
            activeTab === "add" && "bg-primary dark:bg-primary"
          }`}
          onClick={() => setActiveTab("add")}
        >
          <img
            src={editIcon}
            alt="edit icon"
            className={`w-5 h-5 object-contain sm:w-6 sm:h-6 ${
              activeTab === "add" && "invert"
            }`}
          />
        </button>
      </div>

      {activeTab === "add" ? (
        <AddHall />
      ) : activeTab === "hall2" ? (
        <HallChairs hallInChairs={hallTowChairs} />
      ) : activeTab === "hall3" ? (
        <HallChairs hallInChairs={hallOneChairs} />
      ) : (
        <HallChairs hallInChairs={hallOneChairs} />
      )}
    </>
  );
};

export default ProfileHalls;
