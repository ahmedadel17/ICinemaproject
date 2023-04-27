import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "../util/calenderData";
import cn from "../util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  
  return (
    <div className="w-64">
      <div className="flex gap-10 items-center justify-center">
        <GrFormPrevious
          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all dark:invert"
          onClick={() => {
            setToday(today.month(today.month() - 1));
          }}
        />

        <h1 className="text-dark font-light  cursor-pointer hover:scale-95 transition-all dark:text-white" onClick={()=>setToday(currentDate)}>
          {months[today.month()]}, {today.year()}
        </h1>

        <GrFormNext
          className="w-5 h-5 cursor-pointer hover:scale-105 transition-all dark:invert"
          onClick={() => {
            setToday(today.month(today.month() + 1));
          }}
        />
      </div>

      <div className="grid grid-cols-7 py-3">
        {days.map((day, index) => {
          return (
            <h2
              key={index}
              className="text-base font-light text-center text-dark h-6 w-6 grid place-content-center text-gray-500 select-none dark:text-white"
            >
              {day}
            </h2>
          );
        })}
      </div>

      <div className="grid grid-cols-7 ">
        {generateDate(today.month(), today.year()).map(
          ({ date, currentMonth, today }, index) => {
            return (
              <div
                key={index}
                className="p-2 text-center grid place-content-center text-xs border-t border-darkGray"
              >
                <h3
                  className={cn(
                    currentMonth ? "text-dark transition-all cursor-pointer select-none hover:bg-darkGray dark:text-white" : "text-zinc-400",
                    today ? "bg-primary !text-dark" : "",
                    "h-5 w-5 rounded-full grid place-content-center",
                    date.month() === 3 && date.date() === 7  ? "!text-primary" : ""
                  )}
                >
                  {date.date()}
                </h3>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
