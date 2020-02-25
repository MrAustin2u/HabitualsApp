// /*
// **NPM INSTALL**
// REACT CALENDAR
// npm install --save react-calendar react-big-calendar
// MOMENT.js
// npm install moment --save
// ------
// Calendar is a component that will be rendered.
// Moments is a localizer javascript library that parses
// and manipulates the display dates.
// **Calendar not rendering to screen**
// ------
// */

import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
moment.locale("en-GB");

/*
**NPM INSTALL**
REACT CALENDAR
npm install --save react-calendar react-big-calendar
MOMENT.js
npm install moment --save
------
Calendar is a component that will be rendered.
Moments is a localizer javascript library that parses
and manipulates the display dates. 
------
*/

const localizer = momentLocalizer(moment);

const HabitCalendar = props => {
  const {
    match: {
      params: { id }
    }
  } = props;

  const [habitName, setHabitName] = useState("");

  useEffect(() => {
    fetch(`/habit-info?id=${id}`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(habitsData => {
        //console.log(habitsData);
        const items = habitsData;
        // items = [{name:, info:, image:}]
        setHabitName(items[0].name);
      });
  }, []);

  useEffect(() => {
    fetch(`/user-input`, {
      method: "GET"
    })
      .then(res => res.json())
      .then(habitsData => {
        //console.log(habitsData);
        const items = habitsData;
        // items = [{name:, info:, image:}]
        setHabitName(items[0].name);
      });
  }, []);

  return (
    <div>
      <h1>{habitName} Calendar</h1>
      <Calendar
        localizer={localizer}
        events={[
          {
            title: "My Habit Event",
            allDay: false,
            start: new Date(2020, 0, 1, 10),
            end: new Date(2020, 0, 1, 12)
          }
        ]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default HabitCalendar;
