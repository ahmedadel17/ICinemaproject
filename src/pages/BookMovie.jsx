import React from 'react'
import Moviecard from '../components/Moviecard';
import ShowingInfo from '../components/ShowingInfo';
import ProfileHalls from '../components/ProfileHalls';
import { hallTowChairs } from '../components/txt';
import HallChairs from '../components/HallChairs';

const BookMovie = () => {
  return (
    <>
      <h1 className="mb-5 text-xl dark:text-white font-thin md:text-2xl">
        Book: Black Adam
      </h1>

      <div className="mb-5">
        <div className="flex flex-col gap-4 justify-center xl:flex-row">
          <Moviecard
            releaseDate={"28/12/2022"}
            starring={"mohamed tharwat"}
            title={"Nabil elgameel Dr tagmeel"}
            img={"https://assets.voxcinemas.com/posters/P_HO00009956.jpg"}
            features={["Comedy", "105min", "Egyptian", "Arabic"]}
          />

          <ShowingInfo />
        </div>
      </div>

      <div className="flex">
        <HallChairs hallInChairs={hallTowChairs} clicked />

        {/* <div className="flex-1 bg-white shadow-md dark:shadow-darkShadow rounded-xl p-3 dark:bg-dark md:p-5">
          <div className="flex gap-4 flex-wrap pb-5 mb-5 border-b border-gray">
            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="columns">Columns :</label>
              <input
                type="tel"
                className="py-2 px-3 focus:ring-0 rounded-lg shadow-md border !border-gray text-dark font-light dark:bg-dark dark:text-light dark:shadow-darkShadow dark:border-none"
                placeholder="17"
                id="columns"
                onChange={(e) => setChairsColumn(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 flex-1">
              <label htmlFor="row">Row :</label>
              <input
                type="tel"
                className="py-2 px-3 focus:ring-0 rounded-lg shadow-md border !border-gray text-dark font-light dark:bg-dark dark:text-light dark:shadow-darkShadow dark:border-none"
                placeholder="10"
                id="row"
                onChange={(e) => setChairsRow(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pb-5 mb-5 border-b border-gray">
            <button
              className={`flex-1 flex flex-col justify-center items-center gap-2 p-4 border-2 rounded-lg ${
                selectedSeats === "empty" ? "border-primary" : "border-gray"
              }`}
              onClick={() => setSelectedSeats("empty")}
            >
              <img
                src={chairIcon}
                alt=""
                className="w-7 h-7 object-contain lightGray-filter"
              />

              <span className={`text-sm text-zinc-400`}>Empty</span>
            </button>

            <button
              className={`flex-1 flex flex-col justify-center items-center gap-2 p-4 border-2 rounded-lg ${
                selectedSeats === "available" ? "border-primary" : "border-gray"
              }`}
              onClick={() => setSelectedSeats("available")}
            >
              {" "}
              <img
                src={chairIcon}
                alt=""
                className="w-7 h-7 object-contain dark:invert"
              />
              <span className="text-sm text-dark dark:text-light">
                available
              </span>
            </button>

            <button
              className={`flex-1 flex flex-col justify-center items-center gap-2 p-4 border-2 rounded-lg ${
                selectedSeats === "booked" ? "border-primary" : "border-gray"
              }`}
              onClick={() => setSelectedSeats("booked")}
            >
              {" "}
              <img
                src={chairIcon}
                alt=""
                className="w-7 h-7 object-contain gray-filter"
              />
              <span className="text-sm text-gray">Booked</span>
            </button>

            <button
              className={`flex-1 flex flex-col justify-center items-center gap-2 p-4 border-2 rounded-lg ${
                selectedSeats === "vip" ? "border-primary" : "border-gray"
              }`}
              onClick={() => setSelectedSeats("vip")}
            >
              {" "}
              <img
                src={chairIcon}
                alt=""
                className="w-7 h-7 object-contain primary-filter"
              />
              <span className="text-sm text-primary">VIP</span>
            </button>
          </div>

          <div className="flex">
            <button className="block text-center w-full font-thin capitalize py-2 px-10 bg-primary border border-primary transition duration-300 text-dark rounded-md hover:text-primary hover:bg-transparent">
              Add Hall
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default BookMovie