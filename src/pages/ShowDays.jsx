import React from "react";
import { hall } from "../data/selectData";
import SelectOptions from "../components/SelectBox";

const ShowDays = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-between gap-3 mb-5">
        <div className="w-full sm:flex-1">
          <div className="mb-3">
            <label
              htmlFor="pickDays"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Pick days
            </label>
            <input
              type="date"
              id="pickDays"
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Pick days"
            />
          </div>

          <div>
            <label
              htmlFor="pickTimes"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Pick Times
            </label>
            <input
              type="time"
              id="pickTimes"
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="Pick Times"
            />
          </div>
        </div>

        <div className="w-full sm:flex-1">
          <div className="mb-3">
            <label
              htmlFor="premiumSeat"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Premium seat
            </label>
            <input
              type="text"
              id="premiumSeat"
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="EGP"
            />
          </div>

          <div>
            <label
              htmlFor="ordinarySeat"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Ordinary seat
            </label>
            <input
              type="text"
              id="ordinarySeat"
              className="w-full h-full py-2 pl-4 border-none focus:ring-0 rounded-xl shadow-md text-dark font-light dark:bg-dark dark:shadow-darkShadow dark:text-white"
              placeholder="EGP"
            />
          </div>
        </div>

        <div className="w-full md:flex-1 flex flex-col justify-between">
          <div className="mb-3 h-fit">
            <label
              htmlFor="genre"
              className="inline-block mb-2 capitalize font-light text-dark text-lg dark:text-white"
            >
              Genre
            </label>
            <SelectOptions data={hall} />
          </div>

          <div>
            <button className="block text-center w-full font-thin capitalize py-2 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-md hover:text-primary hover:bg-transparent">
              next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowDays;
