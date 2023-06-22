import React, { useState } from "react";
import { chairIcon } from "../assets";

const HallChairs = ({ hallInChairs, clicked }) => {
  const [selectedChair, setSelectedChairs] = useState([])

  const handleSelect = (e) => {
    e.preventDefault()
  }
  return (
    <div className="flex-1 flex justify-center relative rounded-xl p-3 bg-white shadow-md dark:shadow-darkShadow dark:bg-dark md:p-5">
      <div className="overflow-auto">
        {hallInChairs.map((row, index) => (
          <div key={index} className="flex gap-2 mb-3 last-of-type:mb-0">
            {row.map((chair, index) => (
              <a
                href="#"
                key={index}
                className={`w-6 h-6 flex-shrink-0 flex ${
                  chair.status === "empty" ? "invisible" : "visible"
                }`}

                onClick={handleSelect}
              >
                <img
                  src={chairIcon}
                  alt="chair"
                  className={`w-full h-full object-contain ${
                    chair.status === "available"
                      ? "dark:invert"
                      : chair.status === "booked"
                      ? "gray-filter"
                      : chair.status === "vip"
                      ? "primary-filter"
                      : chair.status === "empty"
                      ? "dark:invert"
                      : ""
                  }`}
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HallChairs;
