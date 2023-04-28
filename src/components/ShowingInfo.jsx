import { calendarIcon, chareIcon, timeIcon } from "../assets";
import BookedState from "./BookedState";
import Calendar from "./Calendar";

const ShowingInfo = () => {
  return (
    <div className="w-fit p-3 rounded-2xl shadow-darkShadow bg-white dark:bg-dark">
      <ul className="flex justify-between items-center mb-3">
        <li className="flex items-center justify-center w-64">
          <img
            src={calendarIcon}
            alt="calendar icon"
            className="w-5 h-5 mr-2 object-contain"
          />

          <span className="text-white text-lg font-light capitalize">days</span>
        </li>

        <li className="flex items-center justify-center w-36">
          <img
            src={chareIcon}
            alt="chare icon"
            className="w-5 h-5 mr-2 object-contain"
          />

          <span className="text-white text-lg font-light capitalize">days</span>
        </li>

        <li className="flex items-center justify-center w-48">
          <img
            src={timeIcon}
            alt="time icon"
            className="w-5 h-5 mr-2 object-contain"
          />

          <span className="text-white text-lg font-light capitalize">days</span>
        </li>
      </ul>

      <div className="flex justify-between items-center">
        <Calendar />

        <BookedState />

        <div className="flex flex-col items-center justify-center w-48">
          <p className="text-dark font-light text-lg dark:text-white">
            HH:MM:SS
          </p>

          <p className="text-primary text-3xl font-light my-2">
            10:35:59
          </p>

          <p className="text-dark text-lg font-light dark:text-white">
            left to start show
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowingInfo;
