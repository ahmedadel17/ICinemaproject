import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const percentage = 220;
const valueMax = 294;

const BookedState = () => {
  return (
    <div className="flex items-center justify-center relative w-44 mx-6 px-6 border-x-2 border-primary">
      <CircularProgressbar
        value={percentage}
        maxValue={valueMax}
        styles={{
          root: {
            width: "130px",
            height: "130px",
            margin: "0 auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
          path: {
            stroke: "#FEBE08",
            strokeWidth: "5",
          },
          trail: {
            stroke: "transparent",
          },
        }}
      />

      <div className="w-28 h-28 bg-darkGray rounded-full flex flex-col items-center justify-center">
        <h1 className="w-8/12 text-dark text-center text-lg pb-1 mb-1 border-b-2 border-primary font-light dark:text-white">
          {percentage}
        </h1>

        <p className="text-center text-xs text-dark dark:text-white">
          Booked out of {valueMax}
        </p>
      </div>
    </div>
  );
};

export default BookedState;
